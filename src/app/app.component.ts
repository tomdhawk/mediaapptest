import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/model/movie.interface';
// Dataservice importeren gamaakt in de movie-data.service.ts
import { MovieDataService } from './services/movie-data.service';

@Component({
  selector: 'media-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Bij initialisatie opstarten...
  ngOnInit(): void {
    // De array populaten met de methode
    this.populateMovies();
  }
  title = 'media-app';
  movies: Movie[];

  // Een constructor voor een dataservice maken
  constructor(private dataservice: MovieDataService) {
  }

// Een lijst van movies maken gevuld door de dataservice met de getMovies methode
  public populateMovies(): void {
   this.movies = this.dataservice.getMovies();
   for(const movie of this.movies)
   console.log(movie.title);
  }


  public showSeen(): void {

  }
}
