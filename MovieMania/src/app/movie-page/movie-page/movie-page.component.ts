import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from '../model/movie';
import { MovieList } from '../model/movieList';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {

  movieList: MovieList;
  totalItems: number;
  parametriUgradjeni = {
    page: 1,
    pageSize: 6,
    sort: "rating",
    sortDirection: "desc"
  };
  display:boolean = false;

  constructor(private serviceMovie: MovieService) { }

  ngOnInit(): void {
    this.getMovies();

  }

  getMovies(noviParametri?){

    console.log(noviParametri);
    if(noviParametri){
      this.parametriUgradjeni.page = noviParametri.page || 1;
      this.parametriUgradjeni.sort = noviParametri.sort || this.parametriUgradjeni.sort ;
      this.parametriUgradjeni.sortDirection = noviParametri.sortDirection || this.parametriUgradjeni.sortDirection;
    }
    this.serviceMovie.getMoviesServiceMethod(this.parametriUgradjeni).subscribe(dobijeniFilmovi => {
      this.movieList = dobijeniFilmovi;
      this.totalItems = this.movieList.count;
      this.display = true;
    });
    
  
  }

}
