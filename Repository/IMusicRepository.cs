using OTPLoginAPI.Models;

namespace OTPLoginAPI.Repository
{
    public interface IMusicRepository
    {
        //public Task<bool> AddAlbum(string albumName, string ownedBy, string thumbnail);
        //public Task<bool> AddSinger(string albumName, string thumbnail);

        //public Task<bool> AddSong(string songName, string thumbnail, string link);
        //public Task<bool> SongMapping(string AlbumID, string SingerID, string SongID);
        //public Task<List<AlbumResponseViewModel>> GetAlbums();
        //public Task<List<SingerResponseViewModel>> GetSingers();
        //public Task<List<SongResponseViewModel>> GetSongs(GetSongRequestViewModel request);
        //public Task<List<dynamic>> GetArtistDetails(GetSongRequestViewModel request);

        public Task<List<ResourceViewModel>> GetResources(string type);
        public Task<bool> InsertResources(ResourceViewModel request);
    }
}
