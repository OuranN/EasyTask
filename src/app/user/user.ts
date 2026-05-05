import {Component, computed, EventEmitter, input, Input, Output, output  } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { UserModel } from '../models/user.model';

const RANDOM_INDEX = Math.floor(Math.random()*DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})

export class User {

  user = input.required<UserModel>();
  imagePath = computed(()=> 'assets/users/'+this.user().avatar);

  select = output<string>();
  
  onSelectUser(){
    this.select.emit(this.user().id)
  }

}
