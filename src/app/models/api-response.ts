import { SearchResponse } from './search_response';
export interface ApiResponse{
    results: SearchResponse[],
    totalResults: number,
    Response: boolean,
    cast: SearchResponse[],
}