import { Component, OnInit ,ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { ApiServiceService } from '../api-service.service';
import { InfiniteScrollCustomEvent, ModalController, NavController } from '@ionic/angular';
import { ActorDetailsPage} from '../actor-details/actor-details.page';
import { SearchResponse } from '../models/search_response';
import { Router } from '@angular/router';

const StorageKey ='mylist';
@Component({
  selector: 'app-actors',
  templateUrl: './actors.page.html',
  styleUrls: ['./actors.page.scss'],
})
export class ActorsPage implements OnInit {

  @ViewChild(IonContent) content: IonContent;
  moviesList: Array<SearchResponse>;
  type: string='movie';
  title: string='';
  page: number=1;
  poplist: Array<SearchResponse>;
  
  public isSearchBarOpened  = false;
  constructor(private service: ApiServiceService, public modalController: ModalController,private route: Router) {
    this.moviesList = new Array<SearchResponse>();
  }

  async ngOnInit(){
    this.GetPopularMovies();
   
  }


  getMovies(){
    if(this.title.trim() == ''){
      this.moviesList = new Array<SearchResponse>();
      return;
    }
    this.service.searchDataActors(this.title, 1)
    .subscribe((result) =>{
      this.moviesList= result;
      console.table(result);
    });
  }

    async showDetails(id: string,type:string) {
    const modal = await this.modalController.create({
      component: ActorDetailsPage,
      componentProps: { 
        id: id,
        type: type
      }
    });
    return await modal.present();
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
  goSearch() {
    this.route.navigate(['/av-search']);
  }
 //matm7i mat9is 5li kima hma

  GetPopularMovies() {
    this.service.getPopularActors()
    .subscribe((result) =>{
      this.poplist= result;
      console.table(result);
    });
  }

  onIonInfinite(ev:any) {
    //this.page++;
    this.service.searchDataActors(this.title,this.page++)
    .subscribe((result) =>{
      this.moviesList= this.moviesList.concat(result);
      console.table(this.moviesList);
    });
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
    
  }
  scrollToTop() {
   
    this.content.scrollToTop(500);
  }
}
