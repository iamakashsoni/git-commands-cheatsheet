using OTPLoginAPI.Models;
using OTPLoginAPI.Repository;

namespace OTPLoginAPI.Services
{
    public class MusicService : IMusicService
    {
        private readonly IMusicRepository _musicRepository;

        public MusicService(IMusicRepository musicRepository)
        {
            _musicRepository = musicRepository;
        }

        //public async Task<bool> AddAlbum(string albumName, string ownedBy, string thumbnail)
        //{
        //    return await _musicRepository.AddAlbum(albumName, ownedBy, thumbnail);
        //}

        //public async Task<bool> AddSinger(string singerName, string thumbnail)
        //{
        //    return await _musicRepository.AddSinger(singerName, thumbnail);
        //}

        //public async Task<bool> AddSong(string songName, string thumbnail, string link)
        //{
        //    return await _musicRepository.AddSong(songName, thumbnail, link);
        //}
        //public async Task<bool> SongMapping(string AlbumID, string SingerID, string SongID)
        //{
        //    return await _musicRepository.SongMapping(AlbumID, SingerID, SongID);
        //}

        //public async Task<List<AlbumResponseViewModel>> GetAlbum()
        //{
        //    return await _musicRepository.GetAlbums();
        //}

        //public async Task<List<SingerResponseViewModel>> GetSingers()
        //{
        //    return await _musicRepository.GetSingers();
        //}

        //public async Task<List<SongResponseViewModel>> GetSongs(GetSongRequestViewModel request)
        //{
        //    return await _musicRepository.GetSongs(request);
        //}

        //public async Task<ArtistDetailsResponseModel> GetArtistDetails(GetSongRequestViewModel request)
        //{
        //    var artistDetails = await _musicRepository.GetArtistDetails(request);

        //    var data = artistDetails
        //        .GroupBy(x => new { SingerID = x.SingerID, SingerName = x.SingerName, Thumbnail = x.Thumbnail, CreatedAt = x.CreatedAt })
        //        .Select(g => new ArtistDetailsResponseModel
        //        {
        //            SingerID = g.Key.SingerID,
        //            SingerName = g.Key.SingerName,
        //            Thumbnail = g.Key.Thumbnail,
        //            CreatedAt = g.Key.CreatedAt,
        //            Songs = g.Where(x => x.SongID != null)
        //                .Select(x => new Songs
        //                {
        //                    SongID = x.SongID,
        //                    SongName = x.SongName,
        //                    SongThumbnail = x.SongThumbnail,
        //                    Link = x.Link,
        //                    SongCreatedAt = x.SongCreatedAt
        //                })
        //                .ToList(),
        //            Albums = g.Where(x => x.AlbumID != null)
        //                .GroupBy(x => new { AlbumID = x.AlbumID, AlbumName = x.AlbumName, AlbumThumbnail = x.AlbumThumbnail })
        //                .Select(ag => new Albums
        //                {
        //                    AlbumID = ag.Key.AlbumID,
        //                    AlbumName = ag.Key.AlbumName,
        //                    AlbumThumbnail = ag.Key.AlbumThumbnail,
        //                    AlbumCreatedAt = ag.First().AlbumCreatedAt
        //                })
        //                .ToList()
        //        })
        //        .FirstOrDefault();

        //    return data;
        //}

        public async Task<List<ResourceViewModel>> GetResources(string type)
        {
            return await _musicRepository.GetResources(type);
        }

        public Task<bool> InsertResources(ResourceViewModel request)
        {
            return _musicRepository.InsertResources(request);   
        }
    }
}
