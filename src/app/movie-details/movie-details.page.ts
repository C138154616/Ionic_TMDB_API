import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import {AlertController, ModalController } from '@ionic/angular';
import { Movie } from '../models/movie';
import { Storage1Service } from '../storage1.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movie: Movie;
  id: string='';
  type: string='';
  listmov=[];
  listmov1:Array<any>;
  existe:boolean;
  constructor(private service: ApiServiceService, private modalCtrl: ModalController ,private alertController: AlertController,private storageservice:Storage1Service) {}
  ngOnInit() {
    this.getData();
  }
  async loadData()
  {
   this.listmov = await this.storageservice.getdata();
  }

  getData(){
    this.service.getMovieDetails(this.id).subscribe(res=>{
      console.log(res);
      this.movie=res;
    });
  } 

  cancel() {
    return this.modalCtrl.dismiss();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'AJOUTÉ AVEC SUCCÉS ',      
      message: 'Votre Film à été ajouté à votre liste de favoris',
      buttons: ['OK'],
    });

    await alert.present();
  }
  async presentAlert1() {
    const alert = await this.alertController.create({
      header: 'Attention ',      
      message: 'Ce film existe déja',
      buttons: ['OK'],
    });

    await alert.present();
  }
  async addData(id)
  
  {
    this.listmov1=await this.storageservice.getdata();
    
    for (let t of this.listmov1){
      if(t===id){
        this.existe=true
        
      }else {
       this.existe=false;
      }
    }
    if(this.existe===true){
       this.presentAlert1()
    }else{
      await this.storageservice.addData(id);
      this.loadData();
      this.presentAlert()
    }
  }

}
