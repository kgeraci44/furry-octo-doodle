import { Component, OnInit } from '@angular/core';

import { Music } from '../music';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})

export class MusicPlayerComponent {
  title = 'Music Player';

  test = 'Hello';
  music: Music;

  constructor(private musicService: MusicService) {
   }

  ngOnInit() {
    this.musicService.getNextSong().subscribe(result =>{
      this.music = result;
    });
  }

  nextSong() {
    this.musicService.getNextSong().subscribe(result =>{
      this.music = result;
      let element: HTMLAudioElement = document.getElementById('audio') as HTMLAudioElement;
      element.load();
      element.play();
    });
  }
}

