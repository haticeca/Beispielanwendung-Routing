import { Component, OnInit } from '@angular/core';
import { AuthorisationService } from '../services/authorisation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authorisationService: AuthorisationService) { }

  ngOnInit(): void {
  }

  hasAccess(role: String){
    this.authorisationService.hasAccess(role);
  }
}
