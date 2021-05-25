import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokesGeneratorComponent } from './jokes-generator/jokes-generator.component';


const routes: Routes = [
  {
    path: '',
    component: JokesGeneratorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
