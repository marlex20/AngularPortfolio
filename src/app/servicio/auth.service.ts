import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlLogin = 'https://reqres.in/api/login';
  urlRegister = 'https://reqres.in/api/register';
  token: any;

  constructor(private http: HttpClient, private router: Router) { }
  login(email: string, password: string) {
    this.http.post(this.urlLogin + '/authenticate', { email: email, password: password })
      .subscribe((resp: any) => {
        this.router.navigate(['dashboard']);
        localStorage.setItem('auth.token', resp.token)
      })
  }
  register(email: string, password: string) {
    this.http.post(this.urlRegister + '/authenticate', { email: email, password: password })
      .subscribe((resp: any) => {
        this.router.navigate(['login']);
      })
  }
  logout() {
    localStorage.removeItem('token');
  }
  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }

}
