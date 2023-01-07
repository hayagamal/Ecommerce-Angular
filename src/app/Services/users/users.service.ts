import { Injectable } from '@angular/core';
import UsersJson from 'src/assets/data/users.json';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}
  getUsers() {
    return UsersJson;
  }
  setUser(user: any) {
    UsersJson.push(user);
  }
}
