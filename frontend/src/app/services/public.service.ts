import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  api_url = 'http://127.0.0.1:8000/';
  constructor(private http: HttpClient) { }

  getToken(): string | null {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const parsedUser = JSON.parse(currentUser);
      return parsedUser.token; 
    }
    return null; 
  }

  getMessage() {
    return this.http.get(this.api_url);
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.api_url}accounts/register/`, data);
  }

  getFilms(): Observable<any> {
    return this.http.get(`${this.api_url}films/`);  
  }

  getFilmDetails(filmId: number): Observable<any> {
    return this.http.get(`${this.api_url}films/${filmId}/`); 
  }

  addReview(filmId: number, reviewData: any): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Token ${token}`
    });
  
    return this.http.post(`${this.api_url}films/${filmId}/add-review/`, reviewData, { headers });
  }  
}
