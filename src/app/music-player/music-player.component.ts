import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Music } from '../music';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})

export class MusicPlayerComponent {
  title = 'Music Player';

  test = '';
  private music: Music;
  private playlist: Music[];
  counter: 0;
//  music: Music;
//  playlist: Music[];
 // counter : 0;

  constructor(private musicService: MusicService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getPlaylist();
  }

  getPlaylist(){
    this.test = this.route.snapshot.paramMap.get('category');
    this.musicService.getPlaylist().subscribe(result =>{
      this.playlist = result;
      this.music = this.playlist[0];
    });
  }

  nextSong() {
      this.counter = 1+this.counter;
      console.info('Counter '+this.counter);
      this.music = this.playlist[this.counter];
     // let element: HTMLAudioElement = document.getElementById('audio') as HTMLAudioElement;
     // element.pause();
      //element.load();
     // element.play();
  }
}

