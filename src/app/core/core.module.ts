import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ApiService } from './services/api.service';
import { SnackBarService } from './services/snack-bar.service';
import { JokesService } from './services/jokes.service';
import { FileService } from './services/file.service';
import { HttpErrorInterceptor } from './interceptors/http.error.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    ApiService,
    SnackBarService,
    JokesService,
    FileService
  ]
})
export class CoreModule { }
