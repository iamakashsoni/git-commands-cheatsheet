using OTPLoginAPI.Data;
using OTPLoginAPI.Models;
using System;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace OTPLoginAPI.Repository
{
    public class MusicRepository : IMusicRepository
    {
        private readonly DatabaseHelper _dbHelper;

        public MusicRepository(DatabaseHelper dbHelper)
        {
            _dbHelper = dbHelper;
        }
        //public async Task<bool> AddAlbum(string albumName, string ownedBy, string thumbnail)
        //{
        //    try
        //    {
        //        using (SqlConnection conn = _dbHelper.CreateConnection())
        //        {
        //            await conn.OpenAsync();
        //            using (SqlCommand cmd = new SqlCommand("USP_AddAlbum", conn))
        //            {
        //                cmd.CommandType = CommandType.StoredProcedure;
        //                cmd.Parameters.AddWithValue("@AlbumName", albumName);
        //                cmd.Parameters.AddWithValue("@OwnedBy", ownedBy);
        //                cmd.Parameters.AddWithValue("@Thumbnail", thumbnail);

        //                int rowsAffected = await cmd.ExecuteNonQueryAsync();
        //                return rowsAffected > 0;
        //            }
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        Console.WriteLine($"[ERROR] Add Album: {ex.Message}");
        //        return false;
        //    }
        //}

        //public async Task<bool> AddSinger(string singerName, string thumbnail)
        //{
        //    try
        //    {
        //        using (SqlConnection conn = _dbHelper.CreateConnection())
        //        {
        //            await conn.OpenAsync();
        //            using (SqlCommand cmd = new SqlCommand("USP_AddSinger", conn))
        //            {
        //                cmd.CommandType = CommandType.StoredProcedure;
        //                cmd.Parameters.AddWithValue("@SingerName", singerName);
        //                cmd.Parameters.AddWithValue("@Thumbnail", thumbnail);

        //                int rowsAffected = await cmd.ExecuteNonQueryAsync();
        //                return rowsAffected > 0;
        //            }
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        Console.WriteLine($"[ERROR] Add Singer: {ex.Message}");
        //        return false;
        //    }
        //}

        //public async Task<bool> AddSong(string songName, string thumbnail, string link)
        //{
        //    try
        //    {
        //        using (SqlConnection conn = _dbHelper.CreateConnection())
        //        {
        //            await conn.OpenAsync();
        //            using (SqlCommand cmd = new SqlCommand("USP_AddSong", conn))
        //            {
        //                cmd.CommandType = CommandType.StoredProcedure;
        //                cmd.Parameters.AddWithValue("@SongName", songName);
        //                cmd.Parameters.AddWithValue("@Thumbnail", thumbnail);
        //                cmd.Parameters.AddWithValue("@Link", link);

        //                int rowsAffected = await cmd.ExecuteNonQueryAsync();
        //                return rowsAffected > 0;
        //            }
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        Console.WriteLine($"[ERROR] Add Song: {ex.Message}");
        //        return false;
        //    }
        //}

        //public async Task<bool> SongMapping(string AlbumID, string SingerID, string SongID)
        //{
        //    try
        //    {
        //        using (SqlConnection conn = _dbHelper.CreateConnection())
        //        {
        //            await conn.OpenAsync();
        //            using (SqlCommand cmd = new SqlCommand("USP_SongsMapping", conn))
        //            {
        //                cmd.CommandType = CommandType.StoredProcedure;
        //                cmd.Parameters.AddWithValue("@AlbumID", AlbumID);
        //                cmd.Parameters.AddWithValue("@SingerID", SingerID);
        //                cmd.Parameters.AddWithValue("@SongID", SongID);

        //                int rowsAffected = await cmd.ExecuteNonQueryAsync();
        //                return rowsAffected > 0;
        //            }
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        Console.WriteLine($"[ERROR] Add Mapping: {ex.Message}");
        //        return false;
        //    }
        //}

        //public async Task<List<AlbumResponseViewModel>> GetAlbums()
        //{
        //    var albums = new List<AlbumResponseViewModel>();

        //    try
        //    {
        //        await using var conn = _dbHelper.CreateConnection();
        //        await conn.OpenAsync();

        //        await using var cmd = new SqlCommand("USP_GetAlbum", conn) { CommandType = CommandType.StoredProcedure };
        //        await using var reader = await cmd.ExecuteReaderAsync();

        //        while (await reader.ReadAsync())
        //        {
        //            albums.Add(new AlbumResponseViewModel
        //            {
        //                AlbumID = reader.GetGuid(0),               // Directly using column index
        //                AlbumName = reader.GetString(1),
        //                OwnedBy = reader.GetString(2),
        //                Thumbnail = reader.IsDBNull(3) ? null : reader.GetString(3),
        //                SongCount = reader.IsDBNull(4) ? 0 : reader.GetInt32(4),
        //                CreatedAt = reader.GetDateTime(5)
        //            });
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        Console.WriteLine($"[ERROR] GetAlbums: {ex.Message}");
        //    }

        //    return albums;
        //}

        //public async Task<List<SingerResponseViewModel>> GetSingers()
        //{
        //    var singers = new List<SingerResponseViewModel>();

        //    try
        //    {
        //        await using var conn = _dbHelper.CreateConnection();
        //        await conn.OpenAsync();

        //        await using var cmd = new SqlCommand("USP_GetSingers", conn)
        //        {
        //            CommandType = CommandType.StoredProcedure
        //        };
        //        await using var reader = await cmd.ExecuteReaderAsync();

        //        while (await reader.ReadAsync())
        //        {
        //            singers.Add(new SingerResponseViewModel
        //            {
        //                SingerID = reader.GetGuid(0),               // Directly using column index
        //                SingerName = reader.GetString(1),
        //                Thumbnail = reader.IsDBNull(2) ? null : reader.GetString(2),
        //                AlbumCount = reader.IsDBNull(3) ? 0 : reader.GetInt32(3),
        //                SongCount = reader.IsDBNull(4) ? 0 : reader.GetInt32(4),
        //                CreatedAt = reader.GetDateTime(5)
        //            });
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        Console.WriteLine($"[ERROR] GetSingers: {ex.Message}");
        //    }

        //    return singers;
        //}

        //public async Task<List<SongResponseViewModel>> GetSongs(GetSongRequestViewModel request)
        //{
        //    var songs = new List<SongResponseViewModel>();

        //    try
        //    {
        //        await using var conn = _dbHelper.CreateConnection();
        //        await conn.OpenAsync();

        //        await using var cmd = new SqlCommand("USP_GetSongs", conn)
        //        {
        //            CommandType = CommandType.StoredProcedure
        //        };

        //        cmd.Parameters.AddWithValue("@AlbumID", (object?)request.AlbumID ?? DBNull.Value);
        //        cmd.Parameters.AddWithValue("@SingerID", (object?)request.SingerID ?? DBNull.Value);
        //        cmd.Parameters.AddWithValue("@SongID", (object?)request.SongID ?? DBNull.Value);

        //        await using var reader = await cmd.ExecuteReaderAsync();

        //        while (await reader.ReadAsync())
        //        {
        //            songs.Add(new SongResponseViewModel
        //            {
        //                SongID = reader.GetGuid(0),
        //                SongName = reader.GetString(1),
        //                Thumbnail = reader.IsDBNull(2) ? null : reader.GetString(2),
        //                Link = reader.IsDBNull(3) ? null : reader.GetString(3),
        //                AlbumName = reader.GetString(4),
        //                SingerName = reader.GetString(5),
        //                CreatedAt = reader.GetDateTime(6) // Fixed incorrect index
        //            });
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        Console.WriteLine($"[ERROR] GetSongs: {ex.Message}");
        //    }

        //    return songs;
        //}

        //public async Task<List<dynamic>> GetArtistDetails(GetSongRequestViewModel request)
        //{
        //    dynamic response = new List<dynamic>();

        //    try
        //    {
        //        await using var conn = _dbHelper.CreateConnection();
        //        await conn.OpenAsync();

        //        await using var cmd = new SqlCommand("USP_GetArtistDetails", conn)
        //        {
        //            CommandType = CommandType.StoredProcedure
        //        };
        //        cmd.Parameters.AddWithValue("@SingerID", (object?)request.SingerID ?? DBNull.Value);
        //        cmd.Parameters.AddWithValue("@AlbumID", (object?)request.AlbumID ?? DBNull.Value);

        //        await using var reader = await cmd.ExecuteReaderAsync();

        //        while (await reader.ReadAsync())
        //        {
        //            response.Add(new
        //            {
        //                SingerID = reader.GetGuid(0),
        //                SingerName = reader.GetString(1),
        //                Thumbnail = reader.IsDBNull(2) ? null : reader.GetString(2),
        //                CreatedAt = reader.GetDateTime(3),
        //                SongID = reader.GetGuid(4),
        //                SongName = reader.GetString(5),
        //                Link = reader.IsDBNull(6) ? null : reader.GetString(6),
        //                SongThumbnail = reader.IsDBNull(7) ? null : reader.GetString(7),
        //                SongCreatedAt = reader.GetDateTime(8),
        //                AlbumID = reader.GetGuid(9),
        //                AlbumName = reader.GetString(10),
        //                AlbumThumbnail = reader.IsDBNull(11) ? null : reader.GetString(11),
        //                AlbumCreatedAt = reader.GetDateTime(12)
        //            });
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        Console.WriteLine($"[ERROR] GetArtistDetails: {ex.Message}");
        //    }

        //    return response;
        //}

        public async Task<List<ResourceViewModel>> GetResources(string type)
        {
            var resources = new List<ResourceViewModel>();

            try
            {
                await using var conn = _dbHelper.CreateConnection();
                await conn.OpenAsync().ConfigureAwait(false);

                await using var cmd = new SqlCommand("USP_GetResource", conn)
                {
                    CommandType = CommandType.StoredProcedure
                };

                cmd.Parameters.AddWithValue("@Type", (object?)type ?? DBNull.Value);

                await using var reader = await cmd.ExecuteReaderAsync().ConfigureAwait(false);

                var columnMapping = Enumerable.Range(0, reader.FieldCount)
                                              .ToDictionary(reader.GetName, i => i, StringComparer.OrdinalIgnoreCase);

                while (await reader.ReadAsync().ConfigureAwait(false))
                {
                    var resource = new ResourceViewModel();

                    foreach (var property in typeof(ResourceViewModel).GetProperties())
                    {
                        if (columnMapping.TryGetValue(property.Name, out int index) && !reader.IsDBNull(index))
                        {
                            property.SetValue(resource, reader.GetValue(index));
                        }
                    }

                    resources.Add(resource);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[ERROR] GetResourcesAsync: {ex.Message}");
            }

            return resources;
        }

        public async Task<bool> InsertResources(ResourceViewModel request)
        {
            try
            {
                using (SqlConnection conn = _dbHelper.CreateConnection())
                {
                    await conn.OpenAsync();
                    using (SqlCommand cmd = new SqlCommand("USP_InsertResource", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@Title", request.Title);
                        cmd.Parameters.AddWithValue("@Thumbnail", request.Thumbnail);
                        cmd.Parameters.AddWithValue("@Genre", request.Genre);
                        cmd.Parameters.AddWithValue("@Link", request.Link);
                        cmd.Parameters.AddWithValue("@ArtistsName", request.ArtistsName);
                        cmd.Parameters.AddWithValue("@AlbumName", request.AlbumName);
                        cmd.Parameters.AddWithValue("@Type", request.Type);

                        int rowsAffected = await cmd.ExecuteNonQueryAsync();
                        return rowsAffected > 0;
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[ERROR] Insert Resources: {ex.Message}");
                return false;
            }
        }
    }
}
