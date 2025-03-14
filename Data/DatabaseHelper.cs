using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;

namespace OTPLoginAPI.Data
{
    public class DatabaseHelper
    {
        private readonly IConfiguration _config;

        public DatabaseHelper(IConfiguration config)
        {
            _config = config;
        }

        public SqlConnection CreateConnection()
        {
            return new SqlConnection(_config.GetConnectionString("DefaultConnection"));
        }
    }
}
