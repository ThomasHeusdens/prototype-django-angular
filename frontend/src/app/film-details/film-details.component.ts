import { Component, OnInit } from '@angular/core';
import { PublicService } from '../services/public.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] 
})
export class FilmDetailsComponent implements OnInit {
  film: any;
  isLoggedIn = true;
  stars = [1, 2, 3, 4, 5];

  reviewData: { rating: number | null; description: string } = { rating: null, description: '' };

  constructor(private publicService: PublicService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const filmId = this.route.snapshot.params['id'];
    this.publicService.getFilmDetails(filmId).subscribe(data => {
      this.film = data;
      console.log('Film data:', this.film);
      console.log('Poster image URL:', this.film.poster_image);
    });
  }

  submitReview(): void {
    const filmId = this.route.snapshot.params['id'];
    this.reviewData.rating = Number(this.reviewData.rating);
  
    console.log('Review data:', this.reviewData);
    console.log('Token:', this.publicService.getToken());
  
    this.publicService.addReview(filmId, this.reviewData).subscribe({
      next: (review) => {
        this.film.reviews.push(review);
        this.reviewData = { rating: null, description: '' };
      },
      error: (err) => console.error('Error submitting review:', err)
    });
  }
}
