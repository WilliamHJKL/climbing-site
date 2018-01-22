import { appConfig } from '../../../config/app-config';
import { Injectable } from '@angular/core';
import { RouteListItem } from './route-list-item';
import { Observable } from 'rxjs/Observable';
import { RouteLevel } from './route-level';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RoutesService {

  constructor(private http: HttpClient) { }

  routes = {
    findAll: appConfig.apiprefix + 'routes/',
    findById: (id: number) => (appConfig.apiprefix + `routes/${id}`),
    save: appConfig.apiprefix + 'routes/',
    delete: (id: number) => (appConfig.apiprefix + `routes/${id}`),
  };

  public getRoutes(): Observable<RouteListItem[]> {
    return this.http.get<RouteListItem[]>(this.routes.findAll);
  }
}
