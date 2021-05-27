import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { SnackBarService } from '../services/snack-bar.service';
import { catchError } from 'rxjs/operators';
import { ERROR } from '../config/snack-bar';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError((err, caught) => {
      const errorStatuses = [405, 406, 408, 409, 414, 500, 501]

      if (err instanceof HttpErrorResponse && errorStatuses.includes(err.status)) {
        this.snackBarService.open(ERROR)
      }

      return throwError(err)
    }));
  }
  constructor(private snackBarService: SnackBarService) { }

}
