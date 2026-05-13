import { Component, inject, input, output } from '@angular/core';
import { TaskModel } from './task.model';
import { Card } from "../../shared/card/card";
import { CommonModule, DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, CommonModule],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  taskService = inject(TaskService)
  task = input.required<TaskModel>();
  userId = input.required<string>();
  
  taskComplete = output<string>();
  
  onCompleteTask(){
    this.taskService.removeTask(this.task().id)
  }
}
