import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'movie-details',
    loadChildren: () => import('./movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'popular',
    loadChildren: () => import('./popular/popular.module').then( m => m.PopularPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'actors',
    loadChildren: () => import('./actors/actors.module').then( m => m.ActorsPageModule)
  },
  {
    path: 'actor-details',
    loadChildren: () => import('./actor-details/actor-details.module').then( m => m.ActorDetailsPageModule)
  },
  {
    path: 'av-search',
    loadChildren: () => import('./av-search/av-search.module').then( m => m.AvSearchPageModule)
  },
  {
    path: 'actor-movies',
    loadChildren: () => import('./actor-movies/actor-movies.module').then( m => m.ActorMoviesPageModule)
  },
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
