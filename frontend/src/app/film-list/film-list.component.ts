import { Component, OnInit } from '@angular/core';
import { PublicService } from '../services/public.service';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule] 
})
export class FilmListComponent implements OnInit {
  films: any[] = [];

  constructor(private publicService: PublicService) {}

  ngOnInit(): void {
    this.publicService.getFilms().subscribe(data => {
      this.films = data;
    });
  }
}
