import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';

import { PaginationComponent } from './movie-page/pagination/pagination.component';
import { SortingComponent } from './movie-page/sorting/sorting.component';
import { MovieComponent } from './movie-page/movie/movie.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddNewMovieComponent } from './movie-page/add-new-movie/add-new-movie.component';
import { MoviePageComponent } from './movie-page/movie-page/movie-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComonentComponent } from './movie-page/edit-comonent/edit-comonent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PaginationComponent,
    SortingComponent,
    MovieComponent,
    AddNewMovieComponent,
    MoviePageComponent,
    EditComonentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
