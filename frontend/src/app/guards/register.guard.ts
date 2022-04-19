import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationComponent } from '../registration/registration.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterGuard implements CanDeactivate<RegistrationComponent> {
  canDeactivate(
    component: RegistrationComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.registerForm.dirty) {
        return window.confirm('Wenn sie diese Ansicht jetzt verlassen, gehen Ihre eingegebenen Daten verloren.');
    }
    return true;
  }
}
