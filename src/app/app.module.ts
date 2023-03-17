import { StorageService } from './storage-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Storage1Service } from './storage1.service';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, IonicModule.forRoot(), IonicStorageModule.forRoot(),AppRoutingModule],
  providers: [Storage,StorageService,Storage1Service],
  bootstrap: [AppComponent]
})
export class AppModule {}

