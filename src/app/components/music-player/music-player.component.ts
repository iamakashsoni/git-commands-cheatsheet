import {
  Component,
  Input,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import WaveSurfer from 'wavesurfer.js';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-music-player',
  standalone: false,
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.css',
})
export class MusicPlayerComponent
  implements OnDestroy, AfterViewInit, OnChanges
{
  @Input() song: any;
  isPlaying: boolean = false;
  @ViewChild('waveformContainer', { static: true })
  waveformContainer!: ElementRef;
  private wavesurfer: WaveSurfer | null = null;
  private currentUrl: string | null = null;
  private isLoading: boolean = false;
  volume: number = 0.5; // Initial volume

  constructor(private utilService: UtilService) {}

  ngAfterViewInit(): void {
    if (this.song) {
      this.loadWaveform(this.getFilePath(this.song.link));
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges triggered:', changes);
    debugger;
    if (changes['song'] && this.song) {
      if (this.getFilePath(this.song.link) !== this.currentUrl) {
        console.log('Song changed:', this.getFilePath(this.song.link));
        this.currentUrl = this.getFilePath(this.song.link);
        this.stopAndDestroy();
        this.loadWaveform(this.getFilePath(this.song.link));
      }
    }
  }

  stopAndDestroy(): void {
    if (this.wavesurfer) {
      this.wavesurfer.stop(); // Stop current playback
      this.wavesurfer.destroy(); // Destroy instance
      this.wavesurfer = null;
    }
    this.isPlaying = false; // Reset playing state
  }

  loadWaveform(url: string): void {
    this.isLoading = true;

    this.wavesurfer = WaveSurfer.create({
      container: this.waveformContainer.nativeElement,
      waveColor: '#FFFFFF',
      progressColor: '#8f03fc',
      cursorColor: '#FFFFFF',
      barWidth: 1,
      barGap: 1,
      height: 40,
      hideScrollbar: true,
    });

    this.wavesurfer.on('ready', () => {
      console.log('Waveform ready!');
      this.isLoading = false;
      this.wavesurfer?.setVolume(this.volume);

      // Auto-play new song
      this.wavesurfer?.play();
      this.isPlaying = true;
    });

    this.wavesurfer.on('error', (error) => {
      console.error('Waveform error:', error);
      this.isLoading = false;
    });

    this.wavesurfer.on('finish', () => {
      this.isPlaying = false;
    });

    this.wavesurfer.load(url);
  }

  togglePlay(): void {
    if (this.wavesurfer) {
      this.isPlaying = !this.isPlaying;
      this.wavesurfer.playPause();
    }
  }

  setVolume(volume: any): void {
    volume = (volume.target as HTMLInputElement).value;
    this.volume = parseFloat(volume);
    if (this.wavesurfer) {
      this.wavesurfer.setVolume(this.volume);
    }
  }

  ngOnDestroy(): void {
    this.stopAndDestroy();
  }

  getFilePath(thumbnail: string): string {
    return this.utilService.getFilePath(thumbnail);
  }
}
