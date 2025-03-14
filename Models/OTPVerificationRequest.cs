namespace OTPLoginAPI.Models
{
    public class OTPVerificationRequest
    {
        public string Email { get; set; }
        public string OTP { get; set; }
    }
}
