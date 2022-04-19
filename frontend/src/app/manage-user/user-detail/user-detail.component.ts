import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  currentUser!: User;
  error!: HttpErrorResponse;
  detailForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private fb: FormBuilder) {
    this.detailForm = this.fb.group(
      {
        idControl: ['', Validators.required],
        firstNameControl: ['', Validators.required],
        lastNameControl: ['', Validators.required],
        emailControl: ['', Validators.required],
        roleControl: ['', Validators.required]
      }
    );
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');    /* params['id]; */
    this.getOneUser(id);
  }

  getOneUser(id: any) {
    this.userService.getOne(id).subscribe(
      (response: User) => this.currentUser = response,
      error => this.error = error,
    );
  }

  locationBack(){
    const relUrl = this.router.url.includes('user-detail') ? '../..' : '..';
    this.router.navigate([relUrl], {relativeTo: this.route})
  }
}
