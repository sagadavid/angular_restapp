import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class ReqresService {
  //base of out endpoints
  private url = 'api/users';

  //we need http client to carry out requests
  constructor(private http: HttpClient) {}

  //list of users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  //url by id
  getUser(id: number): Observable<User> {
    const url = `${this.url}/${id}`;

    return this.http.get<User>(url);
  }
}
