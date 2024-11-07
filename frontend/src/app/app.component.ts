import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublicService } from './services/public.service';
import { AuthService } from "./services/auth.service"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'This is my website for Expert lab';
  msg: any;
  constructor(private pService: PublicService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.showMessage();
  }

  showMessage() {
    this.pService.getMessage().subscribe(data=>{
      this.msg = data,
      console.log(this.msg.wmsg)
    })
  }
  logout() {
    this.authService.logout();
  }
}
