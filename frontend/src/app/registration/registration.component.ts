import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, ValidationErrors, ValidatorFn, AbstractControl} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import {AlertComponent} from 'ngx-bootstrap/alert';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user!: User;

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
      let pass = this.registerForm?.get('password')?.value;
      let confirmPass = this.registerForm?.get('passwordrepeat')?.value;
      return pass === confirmPass ? null : { notSame: true }
   }

   registerForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.compose([
      Validators.required,
    /*  Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'), */
      Validators.minLength(8),
      Validators.maxLength(20)])
    ],
    passwordrepeat: [null, Validators.compose([Validators.required])],
    role: [null, Validators.required]
    },
     {
       validators: this.checkPasswords
     });

  roles = [
    {name: 'Admin', abbreviation: 'admin'},
    {name: 'User', abbreviation: 'user'}
  ];

  constructor(
    private uS: UserService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const values = this.registerForm.value;
    console.log(values);
    this.user = {
      _id: values.id,
      firstname: values.firstName,
      lastname: values.lastName,
      email: values.email,
      password: values.password,
      role: values.role
    };
    console.log("bis register methode");
    this.register();
   }

  register() {
    if(this.registerForm.valid) {
      console.log("zu registrierender user : ", this.user);
      this.uS.registerNewUser(this.user).subscribe(
        response => {
          console.log(response);
          console.log(response.password);
          this.router.navigate(['/register-msg']);
        },
        error => {
          console.log(error);
          alert('Ihre Registrierung konnte nicht abgeschlossen werden.!');
        });
    }  else {
      console.log("registrierung nicht geklappt");
      // validate all form fields
      this.validateAllFormFields(this.registerForm);
    }
  }

  isFieldValid(field: any): boolean {
    return true;
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
