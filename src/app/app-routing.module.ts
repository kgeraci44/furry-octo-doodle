import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicPlayerComponent } from './music-player/music-player.component'

const routes: Routes = [
  {path: 'music', component: MusicPlayerComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
