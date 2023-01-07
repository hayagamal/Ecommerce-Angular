import { Injectable } from '@angular/core';
import UsersJson from 'src/assets/data/users.json';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}
  // return all users
  getUsers() {
    return UsersJson;
  }
  //add new user when placing a new order.
  setUser(user: any) {
    UsersJson.push(user);
  }
}
