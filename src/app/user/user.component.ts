import { Subject, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {
  users: User[];
  userSubscription: Subscription;
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userSubscription = this.userService.userSub.subscribe(
      (usersRecup: User[]) => {
        this.users = usersRecup;
        }
    );
    this.userService.emitUser();
  }
  ngOnDestroy():void {
    this.userSubscription.unsubscribe();
  }

}
