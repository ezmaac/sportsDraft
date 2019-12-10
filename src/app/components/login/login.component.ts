import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from  '@angular/material';
import { Router } from '@angular/router';
import { ErrorComponent } from '../errors/error.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public  username:  string  =  "";
  public  password:  string  =  "";

  constructor(private  dialog:  MatDialog, private  router:  Router) { }

  ngOnInit() {
  }
  login(){
    if(this.username  ===  "demo"  &&  this.password  === "demo")
    {
        this.router.navigate(['games']);
    }
    else
    {
        this.dialog.open(ErrorComponent,{ data: {
        message:  "Your login information are incorrect!"
        }});
     }
  }
}
