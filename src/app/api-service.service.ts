import { Actor } from './models/actor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map} from 'rxjs/operators';
import {Observable } from 'rxjs';
import { SearchResponse } from './models/search_response';
import { ApiResponse } from './models/api-response';
import { Movie } from './models/movie';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  baseURL: string ='https://api.themoviedb.org/3';
  apiKey: string = 'df3442e61f137c1ae3c805085cd17746'

  constructor(private http: HttpClient) {}

  searchData(title: string,  page: number): Observable<SearchResponse[]> {
    console.log(`${this.baseURL}/search/movie?api_key=${this.apiKey}&query=${title}&page=${page}`);
    return this.http.get<ApiResponse>(`${this.baseURL}/search/movie?api_key=${this.apiKey}&query=${title}&page=${page}`)
    .pipe(map((response: ApiResponse)=> response.results as SearchResponse[]));   
  }
  searchDataActors(title: string,  page: number=1): Observable<SearchResponse[]> {
    console.log(`${this.baseURL}/search/person?api_key=${this.apiKey}&query=${title}&page=${page}`);
    return this.http.get<ApiResponse>(`${this.baseURL}/search/person?api_key=${this.apiKey}&query=${title}&page=${page}`)
    .pipe(map((response: ApiResponse)=> response.results as SearchResponse[]));    
  }
  searchDataAdv(sort: string,  page: number=1, year: string, genres:string, keyword: string, lang:string): Observable<SearchResponse[]> {
    console.log(`${this.baseURL}/discover/movie?api_key=${this.apiKey}&sort_by=${sort}&page=${page}&year=${year}&with_genres=${genres}&with_keywords=${keyword}&with_original_language=${lang}`);
    return this.http.get<ApiResponse>(`${this.baseURL}/discover/movie?api_key=${this.apiKey}&sort_by=${sort}&page=${page}&year=${year}&with_genres=${genres}&with_keywords=${keyword}&with_original_language=${lang}`)
    .pipe(map((response: ApiResponse)=> response.results as SearchResponse[]));    
  }
  getMovieDetails(id: string ): Observable<Movie> {
    return this.http.get<Movie>(`${this.baseURL}/movie/${encodeURI(id)}?api_key=${this.apiKey}&language=en-US`)
    .pipe(map((result: Movie) => result as Movie));
  }
  getActorDetails(id: string ): Observable<Movie> {
    return this.http.get<Actor>(`${this.baseURL}/person/${encodeURI(id)}?api_key=${this.apiKey}&language=en-US`)
    .pipe(map((result: Actor) => result as Actor));
  }
  getActorMovie(id: string ): Observable<SearchResponse[]> {
    return this.http.get<ApiResponse>(`${this.baseURL}/person/${encodeURI(id)}/movie_credits?api_key=${this.apiKey}&language=en-US`)
    .pipe(map((response: ApiResponse)=> response.cast as SearchResponse[]));   
  }
  getActor_Movies(id:string): Observable<SearchResponse[]> {
    console.log(`${this.baseURL}/person/${encodeURI(id)}/movie_credits?api_key=${this.apiKey}`);
    return this.http.get<ApiResponse>(`${this.baseURL}/person/${encodeURI(id)}/movie_credits?api_key=${this.apiKey}`)
    .pipe(map((response: ApiResponse)=> response.cast as SearchResponse[]));    
  }
  getTrending(): Observable<SearchResponse[]> {
    console.log(`${this.baseURL}/trending/movie/day?api_key=${this.apiKey}`);
    return this.http.get<ApiResponse>(`${this.baseURL}/trending/movie/day?api_key=${this.apiKey}`)
    .pipe(map((response: ApiResponse)=> response.results as SearchResponse[]));    
  }
  getPopular(page:number): Observable<SearchResponse[]> {
    console.log(`${this.baseURL}/movie/popular?api_key=${this.apiKey}`);
    return this.http.get<ApiResponse>(`${this.baseURL}/movie/popular?api_key=${this.apiKey}&page=${page}`)
    .pipe(map((response: ApiResponse)=> response.results as SearchResponse[]));    
  }
  getPopularActors(): Observable<SearchResponse[]> {
    console.log(`${this.baseURL}/person/popular?api_key=${this.apiKey}`);
    return this.http.get<ApiResponse>(`${this.baseURL}/person/popular?api_key=${this.apiKey}`)
    .pipe(map((response: ApiResponse)=> response.results as SearchResponse[]));    
  }
  getLatest(): Observable<SearchResponse[]> {
    console.log(`${this.baseURL}/movie/popular?api_key=${this.apiKey}`);
    return this.http.get<ApiResponse>(`${this.baseURL}/movie/popular?api_key=${this.apiKey}`)
    .pipe(map((response: ApiResponse)=> response.results as SearchResponse[]));    
  }
}
