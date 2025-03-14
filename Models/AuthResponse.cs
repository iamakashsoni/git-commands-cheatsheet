namespace OTPLoginAPI.Models
{
    public class AuthResponse
    {
        public bool Status { get; set; }
        public string Token { get; set; }
        public string Message { get; set; }
    }

    public class AuthResult
    {
        public bool Success { get; }
        public string? Token { get; }
        public string Message { get; }

      
        public AuthResult(bool success, string token, string message)
        {
            Success = success;
            Token = token;
            Message = message;
        }
    }

}
