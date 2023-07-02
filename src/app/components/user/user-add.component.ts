import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReqresService } from 'src/app/services/reqres.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css'],
})
export class UserAddComponent {
  userForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private reqresService: ReqresService,
    private router: Router
  ) {
    this.userForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
    });
  }

  //to access the controls of the form in a shortened way
  get formControls(): any {
    return this.userForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }

    const avatar = 'assets/img/user.jpg';
    const first_name: string = this.formControls.first_name.value;
    const last_name: string = this.formControls.last_name.value;
    this.reqresService
      .addUser({ first_name, last_name, avatar } as User)
      .subscribe(() => this.router.navigate(['users']));
  }
}
