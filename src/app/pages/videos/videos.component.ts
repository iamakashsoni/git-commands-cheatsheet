import { Component } from '@angular/core';
import { MusicService } from '../../services/music.service';
import { SnackbarService } from '../../services/snackbar.service';
import { UtilService } from '../../services/util.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-videos',
  standalone: false,
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css',
})
export class VideosComponent {
  Videos: any;
  showVideoOnTop: any;

  constructor(
    private musicService: MusicService,
    private utilService: UtilService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.fetchData('Video');
  }
  fetchData(type: string): void {
    this.utilService.show();
    this.musicService.getResources(type).subscribe((response: any) => {
      if (response.status) {
        if (type === 'Video') {
          this.Videos = response.data;
          this.showVideoOnTop = this.Videos.reduce((a: any, b: any) => {
            return new Date(a.MeasureDate) > new Date(b.MeasureDate) ? a : b;
          });
        }
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

  playSelectedVideo(video: any): void {
    this.showVideoOnTop = { ...video };
  }
}
