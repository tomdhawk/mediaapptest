import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/model/movie.interface';
import { MovieDataService } from 'src/app/services/movie-data.service';

@Component({
  selector: 'media-movie-list-component',
  templateUrl: './movie-list-component.component.html',
  styleUrls: ['./movie-list-component.component.css']
})
export class MovieListComponentComponent implements OnInit {
  title = 'media-app';
  movies: Movie[];

  ngOnInit(): void {
    // De array populaten met de methode
    this.populateMovies();
  }

  // Een constructor voor een dataservice maken
  constructor(private dataservice: MovieDataService) {
  }

  // Een lijst van movies maken gevuld door de dataservice met de getMovies methode
  public populateMovies(): void {
    this.movies = this.dataservice.getMovies();
    for (const movie of this.movies)
      console.log(movie.title);
  }

  // TODO: Functie voor enkel de bekeken films weer te geven
  public showSeen() {
    this.movies = this.dataservice.getMovies();
    for (const movie of this.movies)
      console.log(movie.title);
    window.alert('List of seen movies');
  }
}


