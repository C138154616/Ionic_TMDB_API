import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActorMoviesPage } from './actor-movies.page';

const routes: Routes = [
  {
    path: '',
    component: ActorMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActorMoviesPageRoutingModule {}
