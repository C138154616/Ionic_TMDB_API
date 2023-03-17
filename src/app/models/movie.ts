import { SearchResponse } from './search_response';
export interface Movie extends SearchResponse {
    Rated:        string;
    release_date: string;
    Runtime:      string;
    Genre:        string;
    Director:     string;
    Writer:       string;
    Actors:       string;
    overview:     string;
    original_language:string;
    Country:      string;
    Awards:       string;
    Ratings:      Rating[];
    Metascore:    string;
    imdbRating:   string;
    vote_average: string;
    totalSeasons: string;
    Response:     string;
    id:           string;
    title:        string;
    media_type:   string;
    profile_path: string;
    name: string;
    known_as : string;
    biography: string;
    place_of_birth: string;
    birthday: string;
    deathday: string;
    popularity: string;
    poster_path: string;
    known_for: SearchResponse[],
}

export interface Rating {
    Source: string;
    Value:  string;
}