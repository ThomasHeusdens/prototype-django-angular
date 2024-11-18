import { Component, OnInit } from '@angular/core';
import { PublicService } from '../services/public.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule] 
})
export class FilmDetailsComponent implements OnInit {
  film: any;
  films: any[] = [];
  randomFilms: any[] = [];
  isLoggedIn = true;
  showReviewForm = false;
  stars = [1, 2, 3, 4, 5];
  reviewData: { rating: number | null; description: string } = { rating: null, description: '' };

  constructor(private publicService: PublicService, private route: ActivatedRoute) {}

  orderReviews(reviews: any[]): any[] {
    return reviews.slice().sort((a, b) => b.rating - a.rating);
  }

  ngOnInit(): void {
    const currentUser = localStorage.getItem('currentUser');

    if(!currentUser){
      this.isLoggedIn = false
    } else {
      this.isLoggedIn = true
    }

    const filmId = this.route.snapshot.params['id'];
    this.publicService.getFilmDetails(filmId).subscribe(data => {
      this.film = data;
      this.film.reviews = this.orderReviews(this.film.reviews);
      console.log('Film data:', this.film);
      console.log('Poster image URL:', this.film.poster_image);
    });

    this.publicService.getFilms().subscribe(data => {
      this.films = data;
      this.randomFilms = this.getRandomFilms(this.films, 5);
    });
  }

  getRandomFilms(films: any[], count: number = 5): any[] {
    const shuffled = films.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
  }

  hasMaxReviews(film: any): boolean {
    const existingRatings = film.reviews.map((review: any) => review.rating);
    return existingRatings.includes(1) && existingRatings.includes(3) && existingRatings.includes(5);
  }

  hasReviewForRating(film: any, rating: number): boolean {
    return film.reviews.some((review: any) => review.rating === rating);
  }
  
  getReviewForRating(film: any, rating: number): any {
    return film.reviews.find((review: any) => review.rating === rating);
  }

  submitReview(): void {
    const filmId = this.route.snapshot.params['id'];
    this.reviewData.rating = Number(this.reviewData.rating);
  
    console.log('Review data:', this.reviewData);
    console.log('Token:', this.publicService.getToken());
  
    this.publicService.addReview(filmId, this.reviewData).subscribe({
      next: (review) => {
        this.film.reviews = this.orderReviews([...this.film.reviews, review]);
        this.reviewData = { rating: null, description: '' };
      },
      error: (err) => alert(err.error.error)
    });
  }
}
