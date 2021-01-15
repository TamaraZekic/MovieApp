import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Genre } from '../model/genre';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-edit-comonent',
  templateUrl: './edit-comonent.component.html',
  styleUrls: ['./edit-comonent.component.css']
})
export class EditComonentComponent implements OnInit {
  movie: Movie;
  genres: Genre[];

  constructor(private route: ActivatedRoute, private service: MovieService) { }

  ngOnInit(): void {
  
    this.route.params.subscribe(response => {
      let id = response['id'];
      console.log(id);
      this.service.getMovieById(id).subscribe(response => { // !!!!!!! posto je ovde bio potreban id iz prethodnog subscribe moralo je sve da ide u ovaj prvi subscribe
        this.movie = response;
        console.log(this.movie);
      });
    });

    this.getGenres();
  }
  
  updateMovie(){
    this.service.putupdateMovie(this.movie).subscribe( response => {
      alert("Dodavanje uspjesno.");
    })
  }

  getGenres(){
    this.service.getAllGenres().subscribe( response => {
      this.genres = response;
    });
  }

}

