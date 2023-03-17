import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvSearchPage } from './av-search.page';

const routes: Routes = [
  {
    path: '',
    component: AvSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvSearchPageRoutingModule {}
