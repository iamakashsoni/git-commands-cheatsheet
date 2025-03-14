import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VideosComponent } from './videos/videos.component';
import { SongsComponent } from './songs/songs.component';
import { MusicPlayerComponent } from '../components/music-player/music-player.component';
import { SongItemComponent } from '../components/song-item/song-item.component';
import { VideoPlayerComponent } from '../components/video-player/video-player.component';
import { VideoItemComponent } from '../components/video-item/video-item.component';
import { VideoItemAtAboutComponent } from '../components/video-item-at-about/video-item-at-about.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    VideosComponent,
    SongsComponent,
    MusicPlayerComponent,
    SongItemComponent,
    VideoPlayerComponent,
    VideoItemComponent,
    VideoItemAtAboutComponent,
  ],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
