import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvSearchPageRoutingModule } from './av-search-routing.module';

import { AvSearchPage } from './av-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvSearchPageRoutingModule
  ],
  declarations: [AvSearchPage]
})
export class AvSearchPageModule {}
