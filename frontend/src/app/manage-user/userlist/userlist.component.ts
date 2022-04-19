import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  members!: User[];
  member!: User;
  bsModalRef?: BsModalRef;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: BsModalService) { }

  ngOnInit(): void {
    this.readAll();
  }
  readOne(id: string) {
    this.userService.getOne(id).subscribe(
      (response: any) => {
    });
  }
  readAll(): void {
        this.userService.getAll().subscribe(
        (
          response: User[]) => {
                  this.members = response;
                  console.log(this.members);
                  return this.members;
          },
          error => console.log(error)
        );
      }
  deleteOne(id: string): void {
      this.userService.deleteOne(id).subscribe(
        (
          response: any) => {
            console.log('response : ', response);
            if(response.status == 204){
                    console.log(response.status);
                    this.readAll()
                    window.location.reload();
                  } else {
                    console.log(response.status);
                    console.log(response.error);
                    this.readAll();
                    window.location.reload();
                  }
          },
          error => console.log(error)
        );
    }
  open(id: string): void { // für die erklärung siehe word Backend erstellen!
    const initialState: ModalOptions = {
      initialState: {
        id: id
      }
    };
    this.bsModalRef = this.modalService.show(DeleteComponent, initialState);
  }
}
