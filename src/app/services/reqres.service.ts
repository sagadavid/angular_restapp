import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; //usage below observable.of
import { User } from '../user';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ReqresService {
  //base of out endpoints
  private url = 'api/users';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  //we need http client to carry out requests
  constructor(private http: HttpClient) {}

  //list of
  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.url)
      .pipe(catchError(this.handleError<User[]>('getUsers', [])));
  }

  //url by id
  getUser(id: number): Observable<User> {
    const url = `${this.url}/${id}`;

    return this.http
      .get<User>(url)
      .pipe(catchError(this.handleError<User>(`getUser id=${id}`)));
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T); //Observable.of() is useful for maintaining the Observable data type before implementing an asynchronous interaction (for example, an http request to an API).
    };
  }
  updateUser(user: User): any {
    return this.http
      .put(this.url, user, this.httpOptions)
      .pipe(catchError(this.handleError<User>('updateUser')));
  }

  addUser(user: User): Observable<User> {
    return this.http
      .post<User>(this.url, user, this.httpOptions)
      .pipe(catchError(this.handleError<User>('addUser')));
  }
}
