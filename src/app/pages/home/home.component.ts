import {
  Component,
  ElementRef,
  OnInit,
  AfterViewInit,
  OnDestroy,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private text: string = 'Welcome to \nYonder Melodies!';
  private index: number = 0;
  private typingTimeout: any;
  private target!: HTMLElement;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.target = this.el.nativeElement.querySelector('#typingEffect');
    if (this.target) {
      this.startTypingEffect();
    }
  }

  private startTypingEffect(): void {
    this.index = 0;
    this.target.innerHTML = '';

    const typeWriter = () => {
      if (this.index < this.text.length) {
        this.target.innerHTML += this.text.charAt(this.index);
        this.index++;
        this.typingTimeout = setTimeout(typeWriter, 150);
      }
    };

    typeWriter();
  }

  @HostListener('window:visibilitychange', ['$event'])
  onVisibilityChange(): void {
    if (document.visibilityState === 'visible') {
      this.startTypingEffect();
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.typingTimeout);
  }
}
