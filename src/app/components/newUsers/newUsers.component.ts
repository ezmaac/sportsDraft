import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDialog} from '@angular/material';
import { ErrorComponent } from '../errors/error.component';


@Component({
  selector: 'app-newUsers',
  templateUrl: './newUsers.component.html',
  styleUrls: ['./newUsers.component.css']
})
export class NewUsersComponent implements OnInit {
  name: string = "";
  email: string = "";
  password: string = "";
  confirmPW: string = "";
  createdAt = new FormControl(new Date());

  constructor(private dialog: MatDialog) {}
    ngOnInit() {
    }

    createUser() {
      this.dialog.open(ErrorComponent,{ data: {
          message:  "Your name is " + this.name + " and your email is " + this.email + " and your password is " + this.password
      }});
    }
}
