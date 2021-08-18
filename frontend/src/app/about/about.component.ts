import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Make nav menu active
    const aboutBtn = document.getElementById('about-btn')
    aboutBtn?.classList.add('active')

    // remove actives
    const searchBtn = document.getElementById('search-btn')
    searchBtn?.classList.remove('active')
    const profileBtn = document.getElementById('profile-btn')
    profileBtn?.classList.remove('active')
    const loginBtn = document.getElementById('login-btn')
    loginBtn?.classList.remove('active')
  }

}
