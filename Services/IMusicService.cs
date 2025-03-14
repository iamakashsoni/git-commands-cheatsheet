using OTPLoginAPI.Models;

namespace OTPLoginAPI.Services
{
    public interface IMusicService
    {
        //public Task<bool> AddAlbum(string albumName, string ownedBy, string thumbnail);
        //public Task<bool> AddSinger(string singerName, string thumbnail);
        //public Task<bool> AddSong(string songName, string thumbnail, string link);
        //public Task<bool> SongMapping(string AlbumID, string SingerID, string SongID);

        //public Task<List<AlbumResponseViewModel>> GetAlbum();
        //public Task<List<SingerResponseViewModel>> GetSingers();
        //public Task<List<SongResponseViewModel>> GetSongs(GetSongRequestViewModel request);
        //public Task<ArtistDetailsResponseModel> GetArtistDetails(GetSongRequestViewModel request);

        public Task<List<ResourceViewModel>> GetResources(string type);

        public Task<bool> InsertResources(ResourceViewModel request);
    }
}
