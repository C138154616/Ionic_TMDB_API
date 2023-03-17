import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActorDetailsPage } from './actor-details.page';

const routes: Routes = [
  {
    path: '',
    component: ActorDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActorDetailsPageRoutingModule {}
