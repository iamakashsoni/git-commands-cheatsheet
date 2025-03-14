import { Component, Input, OnInit } from '@angular/core';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-video-player',
  standalone: false,
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css',
})
export class VideoPlayerComponent {
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
