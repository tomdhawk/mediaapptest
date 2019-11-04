import { Component, OnInit } from '@angular/core';
import { MovieDataService } from 'src/app/services/movie-data.service';
import { inject } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/model/movie.interface';

@Component({
  selector: 'media-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})

export class MovieDetailComponent implements OnInit {

  movie: Movie;

  constructor(private route: ActivatedRoute, private MovieDataService: MovieDataService) {

  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.movie = this.MovieDataService.getMovie(id);

  }
}
