using OTPLoginAPI.Models;
using System.Threading.Tasks;

namespace OTPLoginAPI.Services
{
    public interface IAuthService
    {
        Task<bool> SendOTPAsync(string email);
        Task<AuthResult> VerifyOTPAsync(string email, string otp);  
       
    }
}
