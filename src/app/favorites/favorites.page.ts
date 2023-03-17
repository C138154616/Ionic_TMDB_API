import { AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit,Injectable, Pipe, KeyValueDiffers } from '@angular/core';
import { StorageService } from './../storage-service';
import { Storage1Service } from '../storage1.service';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { Actor } from '../models/actor';
import { KeyValuePipe } from '@angular/common';
import { Movie } from '../models/movie';
import { MovieDetailsPage } from '../movie-details/movie-details.page';
import { ActorDetailsPage} from '../actor-details/actor-details.page';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})


export class FavoritesPage implements OnInit {
  listact:Array<any>=[];
  act:Array<Actor>=[];
  listmov:Array<any>=[];
  movie:Array<Movie>=[];
  selected=''

 

  constructor(private route: Router,private storageservice:StorageService,private service:ApiServiceService,public modalController: ModalController,private storage1:Storage1Service,private alertController:AlertController ) { }


 async ngOnInit() {
    // this.loadData();
  }
  async removeItem(index)
  {
   this.storageservice.removeData(index);
   this.listact.splice(index, 1);
  }
  async removeItem1(index)
  {
   this.storage1.removeData(index);
   this.listact.splice(index, 1);
  }
  async showMovieDetails(id: string) {
    const modal = await this.modalController.create({
      component: MovieDetailsPage,
      componentProps: { 
        id: id,
        
      }
    });
    return await modal.present();
  }
  async showActorDetails(id: string,type:string) {
    const modal = await this.modalController.create({
      component: ActorDetailsPage,
      componentProps: { 
        id: id,
        type: type
      }
    });
    return await modal.present();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'SUPPRIMÉ AVEC SUCCÉS ',      
      message: 'Votre Acteur à été supprimé à votre liste de favoris',
      buttons: ['OK'],
    });

    await alert.present();
  }
  async presentAlert1() {
    const alert = await this.alertController.create({
      header: 'SUPPRIMÉ AVEC SUCCÉS ',      
      message: 'Votre Acteur à été supprimé à votre liste de favoris',
      buttons: ['OK'],
    });

    await alert.present();
  }
  async loadData()
  {
    
   this.listact = await this.storageservice.getdata();
   this.listmov=await this.storage1.getdata();
   console.log(this.listact)
   console.log("mm",this.listmov)
   if(this.selected === "actor"){
    this.act = [];
    for (var t of this.listact){
      this.service.getActorDetails(t).subscribe(res=>{
        this.act.push(res);
      });
    }
  }else if(this.selected === "movie"){
    this.movie = [];
    for (var t of this.listmov){
      this.service.getMovieDetails(t).subscribe(res=>{
        this.movie.push(res);
        console.log("movies",this.movie)
      });

     }

  }

  
  }
 // !!hado dial navigation mayt9asoch ok
 goLatest() {
  this.route.navigate(['/home']);
}
goPopular() {
  this.route.navigate(['/popular']);
}
goActors() {
  this.route.navigate(['/actors']);
}
goFavorites() {
  this.route.navigate(['/favorites']);
}
//matm7i mat9is 5li kima hma
}
