import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import {HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import {BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id!: string;
  currentUser!: User;
  error!: HttpErrorResponse;
  detailForm: FormGroup;
  modalRef!: BsModalRef;

  constructor(private router: Router,
              private fb: FormBuilder,
              public bsModalRef: BsModalRef,
              private userService: UserService) {
    this.detailForm = this.fb.group(
      {
        emailControl: ['', Validators.required],
        firstNameControl: ['', Validators.required],
        lastNameControl: ['', Validators.required]
      }
    );
  }

  ngOnInit(): void {
    this.getOneUser(this.id);
  }

  getOneUser(id: string) {
    this.userService.getOne(id).subscribe(
      (response: User) => this.currentUser = response,
      error => this.error = error,
    );
  }

  deleteUser(id: string) {
    console.log("Delete response:", this.currentUser);
    this.userService.deleteOne(id).subscribe(
      (
        response: any) => {
        console.log('response : ', response);
        if(response.status == 204){
          console.log(response.status);

        } else {
          console.log(response.status);
          console.log(response.error);

        }
      },
      error => console.log(error)
    );
    this.bsModalRef.hide();
  }

  closeModal() {
    this.bsModalRef.hide();
  }
}
