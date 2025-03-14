namespace OTPLoginAPI.Services
{
    public interface IUtilService
    {
        public Task<string> UploadFile(IFormFile file);
    }
}
