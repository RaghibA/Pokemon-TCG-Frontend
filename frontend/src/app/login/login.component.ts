import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user.model';

import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private tokenService: TokenService) { }

  ngOnInit(): void {
    // Make nav menu active
    const loginBtn = document.getElementById('login-btn')
    loginBtn?.classList.add('active')

    // remove actives
    const searchBtn = document.getElementById('search-btn')
    searchBtn?.classList.remove('active')
    const aboutBtn = document.getElementById('about-btn')
    aboutBtn?.classList.remove('active')
  }

  authenticated = false

  onLogIn(loginForm: NgForm) {
    const user = loginForm.value.username
    const pass = loginForm.value.password

    this.authService.login(user, pass)
      .subscribe((response: any) => {
        if (response.token) {
          // Authenticate user
          this.authenticated = true
          this.tokenService.set('currentUser', response.token)
        }
      })
    // validate
    // if fail, alert
    // else change login status
  }


}
