import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.form.group({
    email: [null, Validators.required],
    password: [null, Validators.required]
  });

  constructor(
    private uS: UserService,
    private authentication: AuthenticationService,
    private form: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    const values = this.loginForm.value;
    const email = values.email;
    const password =  values.password;

    this.authentication.loginUser(email, password).subscribe(
      response => {
        console.log('logged in -> response',response);
        this.router.navigate(['/home']);
      },
      error => {
        console.log('error', error);
        console.log('error status', error.status);
        console.log('error error message', error.error.error);
        alert("Anmeldung fehlgeschlagen! Der eingegebene Passwort und E-mail stimmen nicht überein.");
      })
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.login();
    }
    else {
      //validate all form fields
      this.validateAllFormFields(this.loginForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {         // {1}
    Object.keys(formGroup.controls).forEach(field => {  // {2}
      const control = formGroup.get(field);
      if (control instanceof FormControl) {             // {4}
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {        // {5}
        this.validateAllFormFields(control);            // {6}
      }
    });
  }
}
