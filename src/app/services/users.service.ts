import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = [];
  userSub = new Subject<User[]>();

  constructor() { }
emitUser(): void{
    this.userSub.next(this.users);
  }
  addUser(user: User): void {
    this.users.unshift(user);
    this.emitUser();

  }
}
