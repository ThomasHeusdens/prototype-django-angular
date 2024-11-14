import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './services/auth.guard';
import { RegisterComponent } from './register/register.component'
import { FilmListComponent } from './film-list/film-list.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    { 
        path: '', component: HomeComponent 
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'profile', component: ProfileComponent, canActivate: [AuthGuard],
    },
    { 
        path: 'register', component: RegisterComponent 
    },
    { 
        path: 'films', component: FilmListComponent 
    },
    { 
        path: 'films/:id', component: FilmDetailsComponent 
    },
];
