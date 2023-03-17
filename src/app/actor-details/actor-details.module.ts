import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActorDetailsPageRoutingModule } from './actor-details-routing.module';

import { ActorDetailsPage } from './actor-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActorDetailsPageRoutingModule
  ],
  declarations: [ActorDetailsPage]
})
export class ActorDetailsPageModule {}
