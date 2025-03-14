using System;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace OTPLoginAPI.Services
{
    public class MailService : IMailService
    {
        private readonly IConfiguration _configuration;

        public MailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<bool> SendEmail(string email, string otp)
        {
            try
            {
                var smtpSettings = _configuration.GetSection("SMTP");
                string smtpHost = smtpSettings["Host"];
                int smtpPort = int.Parse(smtpSettings["Port"]);
                string smtpUser = smtpSettings["User"];
                string smtpPass = smtpSettings["Password"];
                bool enableSsl = bool.Parse(smtpSettings["EnableSSL"] ?? "true");

                using var client = new SmtpClient(smtpHost, smtpPort)
                {
                    Credentials = new NetworkCredential(smtpUser, smtpPass),
                    EnableSsl = enableSsl,
                    UseDefaultCredentials = false,
                    DeliveryMethod = SmtpDeliveryMethod.Network
                };

                var mailMessage = new MailMessage
                {
                    From = new MailAddress(smtpUser, "Melody"),
                    Subject = "Your OTP Code",
                    Body = $"Your OTP Code is: {otp}. It is valid for 5 minutes.",
                    IsBodyHtml = false
                };

                mailMessage.To.Add(email);

                await client.SendMailAsync(mailMessage);
                return true;
            }
            catch (SmtpException smtpEx)
            {
                return false;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

    }
}
