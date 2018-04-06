import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService{

  createDb(){

    const musicList = [
      { id : 0, location: 'location/test', image: 'none'},
      { id : 1, location: 'location/test', image: 'none'}

    ];

    return musicList;

  }

}
