import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../movie-page/model/movie';
import { map } from 'rxjs/operators';
import { MovieList } from '../movie-page/model/movieList';
import { Genre } from '../movie-page/model/genre';

const baseURL = "http://localhost:3000/api/movies/";
const genreURL = "http://localhost:3000/api/genres";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMoviesServiceMethod(paramss? : any): Observable<MovieList>{

    let queryParams = {};
    console.log(paramss);
    if(paramss){
      queryParams = {
        params : new HttpParams()
        .set("page", paramss.page || 1)
        .set("pageSize", paramss.pageSize || 6)
        .set("sort", paramss.sort || "")
        .set("sortDirection", paramss.sortDirection || "desc")
      }
    }
    console.log(queryParams);
    return this.http.get(baseURL,queryParams).pipe(map(response => {
      return new MovieList(response);
    }));
  }

  getMovieById(id:number): Observable<Movie>{
    return this.http.get(baseURL + id).pipe(map( response => {
      return new Movie(response);
    }));
  }

  putupdateMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(baseURL + movie._id, movie);
  }

  createNewMoviePost(movie: Movie): Observable<Movie>{
    return this.http.post<Movie>(baseURL, movie);
  }

  getAllGenres(): Observable<Genre[]>{
    return this.http.get(genreURL).pipe(map( response => {
      return response as Array<Genre>;
    }));
  }

  postNewGenre(genre: Genre): Observable<Genre>{
    return this.http.post<Genre>(genreURL, genre);
  }
}
