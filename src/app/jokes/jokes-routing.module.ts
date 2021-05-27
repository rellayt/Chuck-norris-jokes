import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokeResolver } from './jokes-resolver.service';
import { JokesComponent } from './jokes.component';

const routes: Routes = [
  {
    path: '',
    component: JokesComponent,
    resolve: {
      joke: JokeResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokesRoutingModule { }
