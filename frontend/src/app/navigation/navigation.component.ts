import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { AuthorisationService } from '../services/authorisation.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private authentication: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
  }

  loggedIn(): boolean {
    return JSON.parse(localStorage.getItem('currentUser')!)
      ? true
      : false;
  }

  getFirstName() {
    return this.authentication.currentUserValue.firstname;
  }

  getRole() {
    return this.authentication.currentUserValue.role;
  }

  logOut() {
    this.authentication.logout();
    this.router.navigate(['home/valediction-msg']);
  }

  showAuthenticatedUser(): boolean {
    if (this.authentication.isAdmin() || this.authentication.isUser()) {
      return true
    } else {
      return false;
    }
  }
}


