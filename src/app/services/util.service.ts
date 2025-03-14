import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  private baseURL = 'https://localhost:7023/api/';

  private loading = new BehaviorSubject<boolean>(false);
  loading$ = this.loading.asObservable();

  constructor() {}

  getFilePath(path: string): string {
    // return this.baseURL + 'wwwroot/' + path;
    return 'D:/Akash/Project/FL-MusicPlayer/OTPLoginAPI/wwwroot/' + path;
  }

  show() {
    this.loading.next(true);
  }

  hide() {
    this.loading.next(false);
  }
}
