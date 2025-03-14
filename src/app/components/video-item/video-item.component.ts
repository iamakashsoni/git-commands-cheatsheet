import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-video-item',
  standalone: false,
  templateUrl: './video-item.component.html',
  styleUrl: './video-item.component.css',
})
export class VideoItemComponent {
  @Input() video!: {
    title: string;
    artistsName: string;
    albumName: string;
    createdAt: Date;
    genre: string;
    link: string;
    thumbnail: string;
  };

  @Output() videoSelected = new EventEmitter<any>();

  onVideoClick() {
    this.videoSelected.emit(this.video);
  }

  constructor(private utilService: UtilService) {}

  getFilePath(thumbnail: string): string {
    return this.utilService.getFilePath(thumbnail);
  }
}
