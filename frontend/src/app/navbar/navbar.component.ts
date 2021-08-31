import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn = false

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.viewUser()
      .subscribe(response => {
        if (response.status === 200) {
          this.loggedIn = true
        }
      })
  }

}
