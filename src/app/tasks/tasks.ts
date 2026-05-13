import { Component, input, computed, signal } from '@angular/core';
import { UserModel } from '../user/user.model';
import { Task } from './task/task';
import { NewTask } from "./new-task/new-task";
import { NewTaskData } from './task/task.model';
import { TaskService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})

export class Tasks {
  isAddingTask = signal<boolean>(false)
  selectUser = input.required<UserModel | undefined>();
  
  constructor(private taskService: TaskService){}

  tasksUserSelected(){
    const tasks = this.taskService.getUserTasks(this.selectUser()!.id)
    return tasks();
  }

  onStartAddTask(){
    this.isAddingTask.set(true)
  }

  onCloseAddTask() {
    this.isAddingTask.set(false)
  }

}
