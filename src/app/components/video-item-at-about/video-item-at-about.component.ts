import { Component, Input } from '@angular/core';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-video-item-at-about',
  standalone: false,
  templateUrl: './video-item-at-about.component.html',
  styleUrl: './video-item-at-about.component.css',
})
export class VideoItemAtAboutComponent {
  @Input() video!: {
    title: string;
    artistsName: string;
    albumName: string;
    createdAt: Date;
    genre: string;
    link: string;
    thumbnail: string;
  };
  constructor(private utilService: UtilService) {}

  getFilePath(thumbnail: string): string {
    return this.utilService.getFilePath(thumbnail);
  }
}
