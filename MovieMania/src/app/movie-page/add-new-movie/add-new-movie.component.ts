import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';
import { Genre } from '../model/genre';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-add-new-movie',
  templateUrl: './add-new-movie.component.html',
  styleUrls: ['./add-new-movie.component.css']
})
export class AddNewMovieComponent implements OnInit {

  registerNewMovieForm: FormGroup;

  movie: Movie;
  flag: Boolean; 
  genres: Genre[];
  newGenre: Genre;

  constructor(private service: MovieService, private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit(): void {
    this.flag = false; // SVE INICIJALIZOVATI U NGONINIT
    this.movie = new Movie; // OVDE SE MORA PRVO INCIJALIZOVATI GORE DEKLARISAN MOVIE DA BI MOGLO U NESTO DA SE SMJESTI ONO STO JE UPISANO(KAO STO JE U SUBSCRIBE NEKAD PISALO MOVIE = RESPONSE)
    this.newGenre = new Genre; // !!!!!!!!!!!!!obavezno inicijalizovati u ng on init kad nesto deklarisemo gore
    this.getGenres();
  }
  createForm(){
    this.registerNewMovieForm = this.fb.group({
      name: ['' , Validators.required],
      description: ['',[ Validators.required, Validators.minLength(30), Validators.maxLength(250)]],
      year: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  /*addMovie(){
    this.service.createNewMoviePost(this.movie).subscribe(response => {
      alert("Uspijesno dodavanje novog filma!");
    });
  }*/

  openGenreForm(){
   this.flag = true;
  }

  getGenres(){
    this.service.getAllGenres().subscribe( response => {
      this.genres = response;
    });
  }

  addNewGenre(){
    console.log(this.newGenre);
    this.service.postNewGenre(this.newGenre).subscribe( response => {
      alert("Successfully added genre!");
      this.flag = false;
      this.getGenres();
    });
  }

  onSubmit(){
    this.service.createNewMoviePost(this.movie).subscribe(response => {
      alert("Successfully added movie!");
    });
    console.log(this.registerNewMovieForm.value);
    this.registerNewMovieForm.reset();
  }

}
