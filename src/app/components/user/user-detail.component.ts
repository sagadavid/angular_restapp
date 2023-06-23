import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReqresService } from '../../services/reqres.service';
import { User } from '../../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent {
  constructor(
    //to access id prameter
    private activateRoute: ActivatedRoute,
    private reqresService: ReqresService
  ) {
    //initialize property in constructor
    /** ActivatedRoute is an interface that contains information on a route associated with a component. The “params” property is an Observable, and as such we can subscribe to it.
     * The observable, if executed successfully, will return a function whose argument is an array of all received parameters.
     * Then, it is a matter of using our service to obtain the information of the selected user, remembering at all times that our service will always return an Observable because it is executed asynchronously. */
    this.activateRoute.params.subscribe((params) => {
      reqresService
        .getUser(params['id'])
        .subscribe((res: User) => (this.user = res));
    });
  }

  user: User = {
    id: 0,
    first_name: '',
    last_name: '',
    avatar: '',
  };
}
