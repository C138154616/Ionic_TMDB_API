import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActorMoviesPageRoutingModule } from './actor-movies-routing.module';

import { ActorMoviesPage } from './actor-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActorMoviesPageRoutingModule
  ],
  declarations: [ActorMoviesPage]
})
export class ActorMoviesPageModule {}
