import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private tokenService: TokenService,
    private router: Router) { }

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

  username = ''
  password = ''

  onLogIn() {

    console.log(this.username)
    console.log(this.password)

    this.authService.login(this.username, this.password)
      .subscribe((response: any) => {
        if (response.token) {
          // Authenticate user
          this.tokenService.set('currentUser', response.token)
          this.router.navigate(['/profile'])
        }
      })
    // if fail, alert
    // else change login status
  }


}
