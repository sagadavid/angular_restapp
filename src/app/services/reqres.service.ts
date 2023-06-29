import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../user';
import { catchError, map } from 'rxjs';

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
    return this.http
      .get<User[]>(this.url)
      .pipe(catchError(this.handleError<User[]>('getUsers', [])));
  }

  //url by id
  getUser(id: number): Observable<User> {
    const url = `${this.url}/${id}`;

    return this.http.get<User>(url);
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
