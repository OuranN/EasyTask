import { Component, input, output } from '@angular/core';


@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  task = input.required<TaskModel>();
  userId = input.required<string>();
  
  taskComplete = output<string>();
  
  onCompleteTask(){
    this.taskComplete.emit(this.task().id)
  }
}
