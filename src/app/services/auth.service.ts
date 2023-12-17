import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  dbUrl: string = 'http://localhost:3000/user';

  loggedIn: boolean = false

  constructor(private http: HttpClient) { }

  createUser(user: User) {
    return this.http.post(this.dbUrl, user);
  }

  getUser(user: User) {
    return this.http.get<User[]>(this.dbUrl + '?email=' + user.email)
  }

}
