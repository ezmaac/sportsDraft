import { Component, OnInit } from '@angular/core';
import { UsersService }  from '../../services/users.service';
import { userList }  from '../../sportsDraft.model';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: userList[];
    displayedColumns = ['username', 'phone', 'email'];

  constructor(private usersService:UsersService) {}
    ngOnInit() {
      this.fetchUsers();
    }

    fetchUsers() {
      this.usersService.getUsers()
        .subscribe((data: userList[]) => {
          this.users = data;
          console.log(this.users);
        });
    }
}
