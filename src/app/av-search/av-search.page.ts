import { Component, OnInit, ViewChild } from '@angular/core';
//import { IonContent } from '@ionic/angular';
import { ApiServiceService } from '../api-service.service';
import { InfiniteScrollCustomEvent, ModalController, NavController } from '@ionic/angular';
import { MovieDetailsPage } from '../movie-details/movie-details.page';
import { SearchResponse } from '../models/search_response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-av-search',
  templateUrl: './av-search.page.html',
  styleUrls: ['./av-search.page.scss'],
})
export class AvSearchPage implements OnInit {
  sort: string="popularity.desc";
  page: number =1;
  year: string="";
  genres:string="";
  keyword: string ="";
  lang:string= "";
  moviesList: Array<SearchResponse>;
  constructor(private service: ApiServiceService, public modalController: ModalController,private route: Router) {this.moviesList = new Array<SearchResponse>();}

  ngOnInit() {
  }

  getMovies(){    
   
    this.service.searchDataAdv(this.sort, this.page, this.year ,this.genres ,this.keyword ,this.lang)
    //this.service.searchData(this.keyword, 1)
    .subscribe((results) =>{
      this.moviesList= results;
      console.table(results);
    });
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
   onIonInfinite(ev:any) {
    
    this.service.searchDataAdv(this.sort, this.page++, this.year ,this.genres ,this.keyword ,this.lang)
    .subscribe((result) =>{
      this.moviesList= this.moviesList.concat(result);
      console.table(this.moviesList);
    });
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
  async showDetails(id: string,type:string) {
    const modal = await this.modalController.create({
      component: MovieDetailsPage,
      componentProps: { 
        id: id,
        type: type
      }
    });
    return await modal.present();
  }

}
