import { Component, OnInit } from '@angular/core';
import { AuthorisationService } from '../services/authorisation.service';

@Component({
  selector: 'app-login-msg',
  templateUrl: './login-msg.component.html',
  styleUrls: ['./login-msg.component.css']
})
export class LoginMsgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getFirstName() {
    if (JSON.parse(localStorage.getItem('currentUser')!)) {
      return JSON.parse(localStorage.getItem('currentUser')!).firstname;
    } else {
      return '';
    }
  }
}
