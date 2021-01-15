import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AddNewMovieComponent } from './movie-page/add-new-movie/add-new-movie.component';
import { EditComonentComponent } from './movie-page/edit-comonent/edit-comonent.component';
import { MoviePageComponent } from './movie-page/movie-page/movie-page.component';
import { MovieComponent } from './movie-page/movie/movie.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'movies', component: MoviePageComponent},
  {path: 'addMovie', component: AddNewMovieComponent},
  {path: 'edit-details/:id', component: EditComonentComponent},
  {path: '', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
