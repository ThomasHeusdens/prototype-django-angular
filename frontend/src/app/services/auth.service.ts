import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    api_url: string = 'http://127.0.0.1:8000/';

    constructor(private http: HttpClient){}

    login(username: string, password: string){
        return this.http.post<any>(this.api_url + `accounts/api/auth/`,
            { username, password }, httpOptions).pipe(
                map(user => {
                    if (user && user.token) {
                        localStorage.setItem("currentUser", JSON.stringify(user))
                    }
                    return user;
                })
            )
    }

    logout(){
        localStorage.removeItem('currentUser')
    }

    isLoggedIn(): boolean {
        return localStorage.getItem('currentUser') != null;
    }
}