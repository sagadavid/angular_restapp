import { Component } from '@angular/core';
import { ReqresService } from '../../services/reqres.service';
import { User } from 'src/app/user';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  users: User[] = [];
  loading: boolean = false;

  constructor(
    private reqresService: ReqresService,
    //help to navigate to a new page, from home
    private router: Router
  ) {
    this.getUsers();
  }

  getUsers() {
    this.loading = true;

    this.reqresService.getUsers().subscribe(
      (res: User[]) => {
        this.users = res;
        this.loading = false;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  userDetails(id: number) {
    //console.log('User id: ', id);
    //navigate to user by id
    this.router.navigate(['user', id]);
  }
  addUser(): void {
    this.router.navigate(['add']);
  }

  deleteUser(user: any) {
    this.users = this.users.filter((u) => u !== user);
    this.reqresService.deleteUser(user).subscribe();
  }
}
