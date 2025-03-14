import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilService } from './services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  isLoading: Observable<boolean>;

  constructor(private utilService: UtilService) {
    this.isLoading = this.utilService.loading$;
  }
}
