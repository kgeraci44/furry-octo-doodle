import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { MusicService } from './music.service';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({

  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule
  ],

  providers: [
    MusicService
  ],

  bootstrap: [
    AppComponent
    ]
})
export class AppModule { }
