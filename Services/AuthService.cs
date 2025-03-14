using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using OTPLoginAPI.Models;
using OTPLoginAPI.Repository;

namespace OTPLoginAPI.Services
{
    public class AuthService : IAuthService
    {
        private readonly IUserRepository _userRepo;
        private readonly IMailService _mailService;
        private readonly IConfiguration _configuration;

        public AuthService(IUserRepository userRepo, IMailService mailService, IConfiguration configuration)
        {
            _userRepo = userRepo;
            _mailService = mailService;
            _configuration = configuration;
        }

        public async Task<bool> SendOTPAsync(string email)
        {
            string otp = new Random().Next(100000, 999999).ToString();
            DateTime expiry = DateTime.Now.AddMinutes(5);

            bool isSaved = await _userRepo.GenerateOTP(email, otp, expiry);
            if (!isSaved) return false;

            return await _mailService.SendEmail(email, otp);
        }

        public async Task<AuthResult> VerifyOTPAsync(string email, string otp)
        {
            int userId = await _userRepo.VerifyOTP(email, otp);

            return userId switch
            {
                0 => new AuthResult(false, null, "Invalid Email or OTP!"),
                1 => new AuthResult(false, null, "Invalid OTP!"),
                2 => new AuthResult(false, null, "OTP has already been used!"),
                3 => new AuthResult(false, null, "OTP has expired!"),
                _ => new AuthResult(true, GenerateJwtToken(userId), "Login successful")
            };
        }

        private string GenerateJwtToken(int userId)
        {
            var jwtConfig = _configuration.GetSection("JwtConfig");
            var secretKey = jwtConfig["Secret"];

            if (string.IsNullOrEmpty(secretKey))
                throw new Exception("JWT Secret is missing in configuration.");

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, userId.ToString()),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var token = new JwtSecurityToken(
                issuer: "your-app",
                audience: "your-app-users",
                claims: claims,
                expires: DateTime.UtcNow.AddHours(1),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
