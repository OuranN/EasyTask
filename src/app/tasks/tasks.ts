import { Component, input, computed, signal } from '@angular/core';
import { UserModel } from '../user/user.model';
import { Task } from './task/task';
import { NewTask } from "./new-task/new-task";

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})

export class Tasks {
  isAddingTask = signal<boolean>(false)

  tasks = signal([
            {
              id: 't1',
              userId: 'u1',
              title: 'Master Angular',
              summary:
                'Learn all the basic and advanced features of Angular & how to apply them.',
              dueDate: '2025-12-31',
            },
            {
              id: 't2',
              userId: 'u3',
              title: 'Build first prototype',
              summary: 'Build a first prototype of the online shop website',
              dueDate: '2024-05-31',
            },
            {
              id: 't3',
              userId: 'u3',
              title: 'Prepare issue template',
              summary:
                'Prepare and describe an issue template which will help with project management',
              dueDate: '2024-06-15',
            },
          ])

  selectUser = input.required<UserModel | undefined>();

  tasksUserSelected = computed( ()=> this.tasks().filter((task) => task.userId===this.selectUser()!.id )
  )
 
  onTaskComplete(taskId : string){
    this.tasks.set(this.tasks().filter((task)=> task.id !== taskId ))  ;
    console.log(this.tasks)
  }

  
  onStartAddTask(){
    this.isAddingTask.set(true)
  }

  onEndAddTask(){
    this.isAddingTask.set(false)
  }

}
