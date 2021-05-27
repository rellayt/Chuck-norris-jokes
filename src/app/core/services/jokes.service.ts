import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { JokeConfig } from '../models/joke-config.model';
import { JokePayload, MultipleJokesPayload } from '../models/joke-payload.model';

@Injectable()
export class JokesService {

  constructor(private apiService: ApiService) { }

  get(config: JokeConfig): Observable<JokePayload> {
    const params = {}

    Object.keys(config.filters).filter(key => !!config.filters[key]).forEach((key) => {
      params[key] = config.filters[key]
    })

    return this.apiService.get('/jokes/random', new HttpParams({ fromObject: params }))
  }

  getMultiple(quantity: number): Observable<MultipleJokesPayload> {
    return this.apiService.get(`/jokes/random/${quantity}`)
  }

}
