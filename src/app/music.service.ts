import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Music } from '.music';

@Injectable()
export class MusicService {

  private musicUrl = 'testServerUrl';

  constructor(
    private http: HttpClient) { }

  getNextSong(): Observable<Music>{
    return this.http.get<Music>(this.musicUrl)
  }
}
