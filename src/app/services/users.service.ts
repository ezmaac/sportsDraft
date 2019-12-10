import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService{
  constructor(private http:HttpClient){
    console.log ('Users service intialized ...')
  }

  getUsers(){
    return this.http.get("http://localhost:3000/api/tasks")
  }
}
