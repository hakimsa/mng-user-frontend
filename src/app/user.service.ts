import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { User } from './User';


@Injectable({
  providedIn: 'root'
})


export class UserService {
  
  private usersUrl ='http://localhost:8080/api/v1/users/all';
  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)

  }
  addUser(user: User): Observable<User> {
   
    return this.http.post<User>(this.usersUrl, user.name)
      .pipe(
        catchError(this.handleError('addUser', user))
      );
  }
  handleError(arg0: string, user: User): (err: any, caught: Observable<User>) => import("rxjs").ObservableInput<any> {
    throw new Error('Method not implemented.');
  }
  

  addnewUser(){

const configUrl= 'http://localhost:8080/api/v1/users/save';
const params = new HttpParams({
fromObject: { Name : 'name',
Email : 'email',
favoritPrograming : [],

}
});

var headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

//the HTTP post request
return  this.http.post(configUrl, params, { headers });
  }

  constructor(private http: HttpClient) {

   }
}
