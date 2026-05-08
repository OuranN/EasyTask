import { Component, input, output } from '@angular/core';
import { TaskModel } from './task.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
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
