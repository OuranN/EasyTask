import { Component, input } from '@angular/core';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})

export class Task {
  selectUser = input<UserModel>()
}
