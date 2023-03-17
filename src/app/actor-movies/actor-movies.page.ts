import { Component, OnInit, ViewChild } from '@angular/core';
import { InfiniteScrollCustomEvent, ModalController } from '@ionic/angular';
import { ApiServiceService } from '../api-service.service';
import { SearchResponse } from '../models/search_response';
import { MovieDetailsPage } from '../movie-details/movie-details.page';

@Component({
  selector: 'app-actor-movies',
  templateUrl: './actor-movies.page.html',
  styleUrls: ['./actor-movies.page.scss'],
})
export class ActorMoviesPage implements OnInit {

  id:string;
  moviesList: Array<SearchResponse>;


  constructor(private service: ApiServiceService,private modalCtrl: ModalController) { }

  public show: boolean = false;
  ngOnInit() {
    this.getData();
  }
  cancel() {
    return this.modalCtrl.dismiss();
  }
  getData(){
    console.log(this.id)
    this.service.getActor_Movies(this.id)
    .subscribe((result) =>{
      this.moviesList= result;
      console.table(result);
    });

  }
  async showDetails(id: string) {
    const modal = await this.modalCtrl.create({
      component: MovieDetailsPage,
      componentProps: { 
        id: id
        
      }
    });
    return await modal.present();
  }
  displayText() {
    this.show = !this.show
  }
  

}
