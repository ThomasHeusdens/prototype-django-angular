import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.myForm.value.username, this.myForm.value.password)
      .pipe(first())
      .subscribe(data => {
        console.log(data)
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });
      });
  }

  goToRegister(){
    this.router.navigate(['/register']);
  }
}
