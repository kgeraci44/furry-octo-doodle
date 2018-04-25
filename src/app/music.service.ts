import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Music } from './music';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MusicService {

  private baseUrl = 'http://localhost:8080';
  private getSongDetailsUrl = this.baseUrl + '/getSong';
  public playSongUrl = this.baseUrl + '/playSong?song=';

  constructor(private http: HttpClient) {}

  getNextSong(): Observable<Music>  {
   return this.http.get<Music>(this.getSongDetailsUrl);
   //Piping this seems not to work :,( Need to figure out why
   //return this.http.get<Music>(this.musicUrl).pipe(this.handleError('getNextSong', []));
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
    //  this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
