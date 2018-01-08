import { Injectable } from '@angular/core';
import { RouteListItem } from './route-list-item';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RoutesService {

  constructor() { }

  public getRoutes(): Observable<RouteListItem[]> {
    return Observable.of(<RouteListItem[]> [<RouteListItem>{
      created:  1,
      updated: 2,
      description: 'super voie',
      id: 1,
      level: '6b',
      location: '34',
      name: 'Tout en camon'
    }]);
  }
}
