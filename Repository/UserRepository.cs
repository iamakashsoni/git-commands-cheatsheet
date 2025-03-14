using OTPLoginAPI.Data;
using OTPLoginAPI.Models;
using System;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace OTPLoginAPI.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly DatabaseHelper _dbHelper;

        public UserRepository(DatabaseHelper dbHelper)
        {
            _dbHelper = dbHelper;
        }

        public async Task<bool> GenerateOTP(string email, string otp, DateTime expiry)
        {
            try
            {
                using (SqlConnection conn = _dbHelper.CreateConnection())
                {
                    await conn.OpenAsync();
                    using (SqlCommand cmd = new SqlCommand("USP_GenerateOTP", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@Email", email);
                        cmd.Parameters.AddWithValue("@OTP", otp);
                        cmd.Parameters.AddWithValue("@ExpiryTime", expiry);

                        int rowsAffected = await cmd.ExecuteNonQueryAsync();
                        return rowsAffected > 0;
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[ERROR] GenerateOTP: {ex.Message}");
                return false;
            }
        }

        public async Task<int> VerifyOTP(string email, string otp)
        {
            using SqlConnection conn = _dbHelper.CreateConnection();
            using SqlCommand cmd = new SqlCommand("USP_VerifyOTP", conn)
            {
                CommandType = CommandType.StoredProcedure
            };

            cmd.Parameters.AddWithValue("@Email", email);
            cmd.Parameters.AddWithValue("@OTP", otp);

            await conn.OpenAsync();
            return (int)await cmd.ExecuteScalarAsync();
        }
    }
}
