import { StorageService } from './../storage-service';
import { Component, OnInit, Injectable } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { AlertController, ModalController } from '@ionic/angular';
import { Actor } from '../models/actor';
import { ActorMoviesPage } from '../actor-movies/actor-movies.page';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.page.html',
  styleUrls: ['./actor-details.page.scss'],
})

export class ActorDetailsPage implements OnInit {
  actor: Actor;
  id: string='';
  type: string='';
  listact=[];
  listact1:Array<any>
  existe:boolean;

  constructor(private service: ApiServiceService, private modalCtrl: ModalController , private alertController: AlertController,private storageservice:StorageService ) {}
  ngOnInit() {
    this.getData();
  }
  async loadData()
  {
   this.listact = await this.storageservice.getdata();
  }
  async addData(id)
  
  {
    this.listact1=await this.storageservice.getdata();
    
    for (let t of this.listact1){
      if(t===id){
        this.existe=true
        
      }else {
       this.existe=false;
      }
    }
    if(this.existe===true){
       this.presentAlert1();
    }else{
      await this.storageservice.addData(id);
      this.loadData();
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'AJOUTÉ AVEC SUCCÉS ',      
      message: 'Votre Acteur à été ajouté à votre liste de favoris',
      buttons: ['OK'],
    });

    await alert.present();
  }
  async presentAlert1() {
    const alert = await this.alertController.create({
      header: 'ATTENTION ',      
      message: 'Cette acteur existe déja',
      buttons: ['OK'],
    });

    await alert.present();
  }
  getData(){
    this.service.getActorDetails(this.id).subscribe(res=>{
      console.log(res);
      this.actor=res;
    });
  } 

  cancel() {
    return this.modalCtrl.dismiss();
  }

  async showDetails(id: string) {
    const modal = await this.modalCtrl.create({
      component: ActorMoviesPage,
      componentProps: { 
        id: id
        
      }
    });
    return await modal.present();
  }
  
}
