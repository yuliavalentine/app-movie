import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  PopularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];

  constructor(private moviesServise: MoviesService) {}

  ngOnInit(): void {
    this.moviesServise.getMovies('popular').subscribe((movies) => {
      this.PopularMovies = movies;
    });
    this.moviesServise.getMovies('top_rated').subscribe((movies) => {
      this.topRatedMovies = movies;
    });
    this.moviesServise.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovies = movies;
    });
  }
}
