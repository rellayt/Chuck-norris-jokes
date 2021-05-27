import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Joke } from '../core/models/joke.model';
import { JokesService } from '../core/services/jokes.service';

@Injectable()
export class JokeResolver implements Resolve<Joke> {
  constructor(
    private jokesService: JokesService,
    private router: Router,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.jokesService.get({ filters: {} })
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
