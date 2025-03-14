import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  private currentSongSource = new BehaviorSubject<any>(null);
  currentSong$ = this.currentSongSource.asObservable();

  constructor(private http: HttpClient, private authService: AuthService) {}

  changeSong(song: any) {
    this.currentSongSource.next(song);
  }

  getSongs(
    AlbumID: string | null = null,
    SingerID: string | null = null,
    SongID: string | null = null
  ): Observable<any> {
    const request = {
      AlbumID: AlbumID ?? null,
      SingerID: SingerID ?? null,
      SongID: SongID ?? null,
    };
    return this.authService.postDataWithToken('music/get-songs', request);
  }

  getAlbums(): Observable<any> {
    return this.authService.getDataWithToken('music/get-albums');
  }
  getArtists(): Observable<any> {
    return this.authService.getDataWithToken('music/get-singers');
  }

  getResources(type: string): Observable<any> {
    return this.authService.postDataWithToken(
      `music/get-resources/?type=${type}`,
      {}
    );
  }
}
