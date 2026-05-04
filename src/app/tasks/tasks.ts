import { Component, input, computed } from '@angular/core';
import { UserModel } from '../models/user.model';
import { Task } from './task/task';
import { dummyTasks } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})

export class Tasks {
  selectUser = input.required<UserModel | undefined>();
  tasks = dummyTasks;
  tasksUserSelected = computed( ()=> dummyTasks.filter((task) => task.userId===this.selectUser()!.id )
  )
 
}
