import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiService} from './api.service';
import {JokePayload, MultipleJokesPayload} from '../../features/jokes/models/joke-payload.model';
import {JokeFilter} from '../../features/jokes/models/joke-filter.model';

@Injectable()
export class JokesService {

  constructor(private apiService: ApiService) {}

  get(config: JokeFilter): Observable<JokePayload> {
    const params = {};

    Object.keys(config.filters).filter(key => !!config.filters[key]).forEach((key) => {
      params[key] = config.filters[key];
    });

    return this.apiService.get('/jokes/random', new HttpParams({fromObject: params}));
  }

  getMultiple(quantity: number): Observable<MultipleJokesPayload> {
    return this.apiService.get(`/jokes/random/${quantity}`);
  }

}
