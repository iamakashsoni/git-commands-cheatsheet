using OTPLoginAPI.Models;
using System.Threading.Tasks;

namespace OTPLoginAPI.Repository
{
    public interface IUserRepository
    {
        Task<bool> GenerateOTP(string email, string otp, DateTime expiry);
        Task<int> VerifyOTP(string email, string otp);
    }
}
