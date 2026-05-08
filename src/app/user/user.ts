import {Component, computed, EventEmitter, input, Input, Output, output  } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { UserModel } from './user.model';
import { NgClass } from "../../../node_modules/@angular/common/types/_common_module-chunk";
import { Card } from "../shared/card/card";

const RANDOM_INDEX = Math.floor(Math.random()*DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})

export class User {

  user = input.required<UserModel>();
  imagePath = computed(()=> 'assets/users/'+this.user().avatar);
  selected = input.required<boolean>();

  select = output<string>();
  
  onSelectUser(){
    this.select.emit(this.user().id)
  }

}
