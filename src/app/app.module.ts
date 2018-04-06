import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { MusicService } from './music.service';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({

  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule
  ],

  providers: [
    MusicService
  ],

  bootstrap: [
    AppComponent
    ]
})
export class AppModule { }
