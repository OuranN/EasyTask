import { Component, input } from '@angular/core';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  task = input.required<TaskModel>();
  userId = input.required<string>();
}
