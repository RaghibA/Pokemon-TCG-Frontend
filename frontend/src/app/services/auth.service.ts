import { Injectable } from '@angular/core';
import { TokenService } from './token.service'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL = 'http://localhost:4040/'

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  login(username: string, password: string) {
    console.log(username + password)
    return this.http.post<User>(this.baseURL + 'users/login', { username, password })
  }

  // view current user
  viewUser() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.tokenService.get('currentUser')
    })
    return this.http.get<any>(this.baseURL + 'users/me', { headers })
  }

}
