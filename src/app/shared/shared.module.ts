import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    MaterialModule,
    BrowserAnimationsModule
  ],
  exports: [MaterialModule]
})
export class SharedModule { }
