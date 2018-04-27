import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    const musicList = [
    {
      //id: 0,
      title: 'Burn The Witch',
      artist: 'RadioHead',
      location: 'assets/01 - Burn The Witch.wav',
      album: 'A Moon Shaped Pool'
     // image: ''
    },
    {
      //id: 1,
      title: 'Decks Dark',
      artist: 'RadioHead',
      location: 'assets/03 - Decks Dark.wav',
      album: 'A Moon Shaped Pool'
     // image: ''
    }

    ];

    return {musicList};

  }

}
