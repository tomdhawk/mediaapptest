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
  ngOnInit(): void {

  }

}
