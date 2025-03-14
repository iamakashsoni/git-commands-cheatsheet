import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface SnackbarData {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private snackbarSubject = new BehaviorSubject<SnackbarData[]>([]);
  snackbar$ = this.snackbarSubject.asObservable();

  private snackbarQueue: SnackbarData[] = [];

  showSnackbar(
    message: string,
    type: 'success' | 'error' | 'warning' | 'info'
  ) {
    this.snackbarQueue.push({ message, type });
    this.updateSnackbarQueue();
  }

  private updateSnackbarQueue() {
    if (this.snackbarQueue.length > 0) {
      const currentSnackbars = this.snackbarQueue.slice(0, 3);
      this.snackbarSubject.next(currentSnackbars);

      setTimeout(() => {
        this.snackbarQueue.shift();
        this.updateSnackbarQueue();
      }, 3000);
    } else {
      this.snackbarSubject.next([]);
    }
  }
}
