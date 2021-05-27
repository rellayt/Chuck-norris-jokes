import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { JokesComponent } from './jokes.component';
import { JokeResolver } from './jokes-resolver.service';
import { JokesRoutingModule } from './jokes-routing.module';
import { CommonModule } from '@angular/common';
import { UnescapePipe } from './unescape.pipe';

@NgModule({
  imports: [
    CommonModule,
    JokesRoutingModule,
    SharedModule,
  ],
  declarations: [
    JokesComponent,
    UnescapePipe
  ],
  providers: [JokeResolver]
})
export class JokesModule { }
