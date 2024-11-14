import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { PublicService } from './services/public.service';
import { AuthService } from "./services/auth.service"
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLoggedIn: boolean = false;
  msg: any;
  constructor(private pService: PublicService, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.showMessage();
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  showMessage() {
    this.pService.getMessage().subscribe(data=>{
      this.msg = data,
      console.log(this.msg.wmsg)
    })
  }
  logout() {
    this.authService.logout();
    window.location.reload();
    this.isLoggedIn = false;
  }
}
