import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { JokesComponent } from './components/jokes.component';
import { JokeResolver } from './jokes-resolver.service';
import { JokesRoutingModule } from './jokes-routing.module';
import { CommonModule } from '@angular/common';
import { UnescapePipe } from './unescape.pipe';
import { QuantityInputComponent } from './components/quantity-input/quantity-input.component';

@NgModule({
  imports: [
    CommonModule,
    JokesRoutingModule,
    SharedModule,
  ],
  declarations: [
    JokesComponent,
    UnescapePipe,
    QuantityInputComponent
  ],
  providers: [JokeResolver]
})
export class JokesModule { }
