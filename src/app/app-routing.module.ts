import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponentComponent } from './movie/movie-list-component/movie-list-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';


const routes: Routes = [
  { path: '', component: MovieListComponentComponent },
  { path: 'movies', component: MovieListComponentComponent },
  {path: 'movies/:id', component: MovieDetailComponent},
  {path: '**', component: PageNotFoundComponent}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
