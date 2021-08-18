import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Make nav menu active
    const profileBtn = document.getElementById('profile-btn')
    profileBtn?.classList.add('active')

    // remove actives
    const searchBtn = document.getElementById('search-btn')
    searchBtn?.classList.remove('active')
    const aboutBtn = document.getElementById('about-btn')
    aboutBtn?.classList.remove('active')
  }

}
