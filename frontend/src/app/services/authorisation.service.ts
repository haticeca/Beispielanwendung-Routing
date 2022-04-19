import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorisationService {

  constructor() { }
  // @ts-ignore
  hasAccess(role: String) {
      if (localStorage.getItem('currentUser') ) {
        if (JSON.parse(localStorage.getItem('currentUser')!).role === 'admin') {
            return true;
          }
      }
  }
}
