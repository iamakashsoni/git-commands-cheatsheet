import { Component } from '@angular/core';
import { MusicService } from '../../services/music.service';
import { SnackbarService } from '../../services/snackbar.service';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  Audios: any[] = [];
  Videos: any[] = [];

  selectedSong: any = null;
  showVideoOnTop: any;

  constructor(
    private musicService: MusicService,
    private utilService: UtilService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.fetchData('Audio');
    this.fetchData('Video');
  }

  fetchData(type: string): void {
    this.utilService.show();
    this.musicService.getResources(type).subscribe((response: any) => {
      if (response.status) {
        if (type === 'Audio') this.Audios = response.data;
        if (type === 'Video') this.Videos = response.data;
        this.utilService.hide();
        this.snackbarService.showSnackbar(response.message, 'success');
      } else {
        this.utilService.hide();
        this.snackbarService.showSnackbar(response.message, 'error');
      }
    });
  }

  getFilePath(thumbnail: string): string {
    return this.utilService.getFilePath(thumbnail);
  }

  selectSong(song: any) {
    this.selectedSong = song;
  }

  playSelectedVideo(video: any): void {
    this.showVideoOnTop = { ...video };
  }
}
