import { Component, OnInit } from '@angular/core';

import { Music } from './music';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Music Player';

  test = 'Hello';
  music: Music ={
    id: 0,
    location: 'assets/SampleAudio_0.4mb.mp3',
    image: ''
   };

  constructor() { }

  ngOnInit() {
  }


}
