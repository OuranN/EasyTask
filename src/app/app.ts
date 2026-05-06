import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { User } from "./user/user";
import { Tasks } from './tasks/tasks';
import { DUMMY_USERS } from './dummy-users';
import { UserModel } from './user/user.model';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Easy-Task');
  users = DUMMY_USERS;

  selectUser = signal<UserModel  | undefined>(undefined)

  onSelectUser(selectedUserId:string){
    const user = DUMMY_USERS.find(user=> user.id===selectedUserId)
    this.selectUser.set(user);
  } 
}
