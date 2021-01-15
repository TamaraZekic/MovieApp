import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() inputMovie: Movie;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openDetails(){
    this.router.navigate(['/edit-details',this.inputMovie._id]);
  }

}
