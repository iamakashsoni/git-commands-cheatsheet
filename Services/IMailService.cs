using System.Threading.Tasks;

namespace OTPLoginAPI.Services
{
    public interface IMailService
    {
        Task<bool> SendEmail(string email, string otp);

    }
}
