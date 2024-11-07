import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  get f() {
    return this.myForm.controls;
  }

  onSubmit() {
    this.authService.login(this.f['username'].value, this.f['password'].value).pipe(first()).subscribe(
      data => {
        console.log(data);
      }
    );
    console.warn(this.myForm.value);
  }
}
