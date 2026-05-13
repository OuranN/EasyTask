import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {

  private taskService = inject(TaskService)
  enteredTitle = '';
  enteredSumary = '';
  enteredDate = '';
  
  close = output();
  add = output<NewTaskData>();
  userId = input.required<string>()

  onCancelAddNewTask(){
    this.close.emit()
  }

  onSubmit(){
    let task = {
          title: this.enteredTitle,
          summary:  this.enteredSumary,
          dueDate:  this.enteredDate
    }
    this.taskService.addTask(task, this.userId() )
    this.close.emit(); //usado para fechar o add task
    
  }

}
