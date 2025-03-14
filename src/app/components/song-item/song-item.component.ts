import { Component, Input } from '@angular/core';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-song-item',
  standalone: false,
  templateUrl: './song-item.component.html',
  styleUrl: './song-item.component.css',
})
export class SongItemComponent {
  @Input() song!: {
    title: string;
    artistsName: string;
    albumName: string;
    createdAt: Date;
    genre: string;
    link: string;
    thumbnail: string;
  };
  @Input() position!: number;
  constructor(private utilService: UtilService) {}

  getFilePath(thumbnail: string): string {
    return this.utilService.getFilePath(thumbnail);
  }
}
