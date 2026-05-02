import {Component, computed, EventEmitter, input, Input, Output, output  } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const RANDOM_INDEX = Math.floor(Math.random()*DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})

export class User {

  @Input({required:true}) id!:string;

  avatar = input.required<string>();
  name = input.required<string>();
  imagePath = computed(()=> 'assets/users/'+this.avatar());

  select = output<string>();
  
  onSelectUser(){
    this.select.emit(this.id)
  }

}
