namespace OTPLoginAPI.Models
{
    public class AlbumRequestViewModel()
    {
        public string AlbumName { get; set; }
        public string OwnedBy { get; set; }
        public IFormFile Thumbnail { get; set; }
    }
    public class SingerRequestViewModel()
    {
        public string SingerName { get; set; }
        public IFormFile Thumbnail { get; set; }
    }
    public class SongRequestViewModel()
    {
        public string SongName { get; set; }
        public IFormFile Thumbnail { get; set; }
        public IFormFile Link { get; set; }
    }

    public class MapRequestViewModel()
    {
        public string AlbumID { get; set; }
        public string SingerID { get; set; }
        public string SongID { get; set; }
    }

    public class AlbumResponseViewModel()
    {
        public Guid AlbumID { get; set; }
        public string AlbumName { get; set; }
        public string OwnedBy { get; set; }
        public string Thumbnail { get; set; }
        public int SongCount { get; set; }
        public DateTime CreatedAt { get; set; }
    }

    public class SingerResponseViewModel()
    {
        public Guid SingerID { get; set; }
        public string SingerName { get; set; }
        public string Thumbnail { get; set; }
        public int AlbumCount { get; set; }
        public int SongCount { get; set; }
        public DateTime CreatedAt { get; set; }
    }

    public class GetSongRequestViewModel()
    {
        public string? AlbumID { get; set; }
        public string? SingerID { get; set; }
        public string? SongID { get; set; }
    }
    public class SongResponseViewModel()
    {
        public Guid SongID { get; set; }
        public string SongName { get; set; }
        public string Thumbnail { get; set; }
        public string Link { get; set; }
        public string AlbumName { get; set; }
        public string SingerName { get; set; }
        public DateTime CreatedAt { get; set; }
    }

    public class Albums()
    {
        public Guid AlbumID { get; set; }
        public string AlbumName { get; set; }
        public string AlbumThumbnail { get; set; }
        public DateTime AlbumCreatedAt { get; set; }

    }

    public class Songs()
    {
        public Guid SongID { get; set; }
        public string SongName { get; set; }
        public string Link { get; set; }
        public string SongThumbnail { get; set; }
        public DateTime SongCreatedAt { get; set; }

    }

    public class ArtistDetailsResponseModel()
    {
        public Guid SingerID { get; set; }
        public string SingerName { get; set; }
        public string Thumbnail { get; set; }
        public DateTime CreatedAt { get; set; }
        public List<Songs> Songs { get; set; }
        public List<Albums> Albums { get; set; }

    }

    public class ResourceViewModel()
    {
        public Guid ID { get; set; }
        public string Title { get; set; }
        public string Thumbnail { get; set; }
        public string Genre { get; set; }
        public string Link { get; set; }
        public string ArtistsName { get; set; }
        public string AlbumName { get; set; }
        public string Type { get; set; }
        public DateTime CreatedAt { get; set; }
    }

    public class ResourceRequestModel()
    {
        public Guid ID { get; set; }
        public string Title { get; set; }
        public IFormFile Thumbnail { get; set; }
        public string Genre { get; set; }
        public IFormFile Link { get; set; }
        public string ArtistsName { get; set; }
        public string AlbumName { get; set; }
        public string Type { get; set; } //Audio, Video
        public DateTime CreatedAt { get; set; }
    }

}
