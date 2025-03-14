using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OTPLoginAPI.Models;
using OTPLoginAPI.Services;
using System.Threading.Tasks;

namespace OTPLoginAPI.Controllers
{
    [Route("api/music")]
    [ApiController]
    //[Authorize]
    public class MusicController : ControllerBase
    {
        private readonly IMusicService _musicService;
        private readonly IUtilService _utilService;

        public MusicController(IMusicService musicService, IUtilService utilService)
        {
            _musicService = musicService;
            _utilService = utilService;
        }

        //[HttpPost("add-album")]
        //[Consumes("multipart/form-data")]
        //public async Task<IActionResult> AddAlbum([FromForm] AlbumRequestViewModel request)
        //{
        //    string relativePath = await _utilService.UploadFile(request.Thumbnail);
        //    bool isAdded = await _musicService.AddAlbum(request.AlbumName, request.OwnedBy, relativePath);

        //    return isAdded
        //        ? Ok(new { Status = true, Message = "Album added successfully!", ThumbnailPath = relativePath })
        //        : BadRequest(new { Status = false, Message = "Failed to add album." });
        //}

        //[HttpPost("add-singer")]
        //[Consumes("multipart/form-data")]
        //public async Task<IActionResult> AddSinger([FromForm] SingerRequestViewModel request)
        //{
        //    string relativePath = await _utilService.UploadFile(request.Thumbnail);
        //    bool isAdded = await _musicService.AddSinger(request.SingerName, relativePath);

        //    return isAdded
        //        ? Ok(new { Status = true, Message = "Singer added successfully!", ThumbnailPath = relativePath })
        //        : BadRequest(new { Status = false, Message = "Failed to add singer." });
        //}


        //[HttpPost("add-song")]
        //[Consumes("multipart/form-data")]
        //public async Task<IActionResult> AddSong([FromForm] SongRequestViewModel request)
        //{
        //    string relativePathThumbnail = await _utilService.UploadFile(request.Thumbnail);
        //    string relativePathLink = await _utilService.UploadFile(request.Link);
        //    bool isAdded = await _musicService.AddSong(request.SongName, relativePathThumbnail, relativePathLink);

        //    return isAdded
        //        ? Ok(new { Status = true, Message = "Song added successfully!", ThumbnailPath = relativePathThumbnail, Link = relativePathLink })
        //        : BadRequest(new { Status = false, Message = "Failed to add song." });
        //}

        //[HttpPost("map-song")]
        //public async Task<IActionResult> SongMapping([FromForm] MapRequestViewModel request)
        //{
        //    bool isAdded = await _musicService.SongMapping(request.AlbumID, request.SingerID, request.SongID);

        //    return isAdded
        //        ? Ok(new { Status = true, Message = "Mapping added successfully!" })
        //        : BadRequest(new { Status = false, Message = "Failed to map." });
        //}

        //[HttpGet("get-albums")]
        //public async Task<IActionResult> GetAlbum()
        //{
        //    var albums = new List<AlbumResponseViewModel>();
        //    albums = await _musicService.GetAlbum();

        //    return albums.Count >= 0
        //        ? Ok(new { Status = true, Message = "Albums retrived successfully!", albums = albums })
        //        : BadRequest(new { Status = false, Message = "Failed to get albums." });
        //}

        //[HttpGet("get-singers")]
        //public async Task<IActionResult> GetSingers()
        //{
        //    var singers = new List<SingerResponseViewModel>();
        //    singers = await _musicService.GetSingers();

        //    return singers.Count >= 0
        //        ? Ok(new { Status = true, Message = "Singers retrived successfully!", singers = singers })
        //        : BadRequest(new { Status = false, Message = "Failed to get singers." });
        //}

        //[HttpPost("get-songs")]
        //public async Task<IActionResult> GetSongs(GetSongRequestViewModel request)
        //{
        //    var songs = new List<SongResponseViewModel>();
        //    songs = await _musicService.GetSongs(request);

        //    return songs.Count >= 0
        //        ? Ok(new { Status = true, Message = "Songs retrived successfully!", songs = songs })
        //        : BadRequest(new { Status = false, Message = "Failed to get albums." });
        //}

        //[HttpPost("get-artistDetails")]
        //public async Task<IActionResult> GetArtistDetails(GetSongRequestViewModel request)
        //{
        //    var artistDetails = new ArtistDetailsResponseModel();
        //    artistDetails = await _musicService.GetArtistDetails(request);

        //    return artistDetails != null && artistDetails.SingerID != Guid.Empty
        //        ? Ok(new { Status = true, Message = "details retrived successfully!", artistDetails = artistDetails })
        //        : BadRequest(new { Status = false, Message = "Failed to get details." });
        //}

        [HttpPost("get-resources")]
        public async Task<IActionResult> GetResources(string type)
        {
            var result = new List<ResourceViewModel>();
            result = await _musicService.GetResources(type);

            return result.Count > 0
                ? Ok(new { Status = true, Message = "Data retrived successfully!", Data = result })
                : BadRequest(new { Status = false, Message = "Failed to get details." });
        }

        [HttpPost("insertResource")]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> InsertResource([FromForm] ResourceRequestModel request)
        {
            string thumbnail = await _utilService.UploadFile(request.Thumbnail);
            string link = await _utilService.UploadFile(request.Link);

            var requestData = new ResourceViewModel()
            {
                Title = request.Title,
                Thumbnail = thumbnail,
                Link = link,
                Genre = request.Genre,
                ArtistsName = request.ArtistsName,
                AlbumName = request.AlbumName,
                Type = request.Type
            };
            bool isAdded = await _musicService.InsertResources(requestData);

            return isAdded
                ? Ok(new { Status = true, Message = "Data added successfully!", })
                : BadRequest(new { Status = false, Message = "Failed to add album." });
        }
    }
}
