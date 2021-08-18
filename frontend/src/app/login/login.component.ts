import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

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

}
