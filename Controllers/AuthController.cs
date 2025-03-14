using Microsoft.AspNetCore.Mvc;
using OTPLoginAPI.Models;
using OTPLoginAPI.Services;
using System.Linq;
using System.Threading.Tasks;

namespace OTPLoginAPI.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("send-otp")]
        public async Task<IActionResult> SendOTP([FromBody] OTPRequest request)
        {
            bool sent = await _authService.SendOTPAsync(request.Email);
            return sent ? Ok(new { status = true, Message = "OTP sent!" }) : BadRequest(new { status = false, Message = "Failed to send OTP." });
        }

        [HttpPost("verify-otp")]
        public async Task<IActionResult> VerifyOTP([FromBody] OTPVerificationRequest request)
        {
            var result = await _authService.VerifyOTPAsync(request.Email, request.OTP);
            if (!result.Success)
                return BadRequest(new AuthResponse { Status = false, Message = result.Message });

            return Ok(new AuthResponse { Status = true, Token = result.Token, Message = result.Message });

        }
    }
}
