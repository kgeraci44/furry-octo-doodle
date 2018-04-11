import { Component, OnInit } from '@angular/core';

import { Music } from './music';
import { MusicService } from './music.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Music Player';

  test = 'Hello';
  musicList: Music[];
  music: Music;

  constructor(private musicService: MusicService) {
     this.musicService.getNextSong().subscribe(music => this.music = music);
     // this.music = this.musicList[0];
    //this.music = this.musicService.getNextSong();
   }

  ngOnInit() {
  }

  nextSong() {
   // this.music = this.musicService.getNextSong()[1];
    this.musicService.getNextSong().subscribe(music => this.music = music);
    let element: HTMLAudioElement = document.getElementById('audio') as HTMLAudioElement;
    element.load();
    element.play();
  }
}
