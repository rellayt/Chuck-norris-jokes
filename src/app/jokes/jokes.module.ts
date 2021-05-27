import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { JokesComponent } from './jokes.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    JokesComponent
  ]
})
export class JokesModule { }
