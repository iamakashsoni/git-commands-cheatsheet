import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SnackbarService } from '../../services/snackbar.service';

interface SnackbarData {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

@Component({
  selector: 'app-snackbar',
  standalone: false,
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
})
export class SnackbarComponent implements OnInit {
  snackbar$!: Observable<SnackbarData[]> | null;

  constructor(private snackbarService: SnackbarService) {}

  ngOnInit() {
    this.snackbar$ = this.snackbarService.snackbar$;
  }
}
