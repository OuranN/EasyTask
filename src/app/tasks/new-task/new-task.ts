import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {

  enteredTitle = '';
  enteredSumary = '';
  enteredDate = '';
  
  cancelAddTask = output();
  add = output<NewTaskData>();

  onCancelAddNewTask(){
    this.cancelAddTask.emit()
  }

  onSubmit(){
    let task = {
          title: this.enteredTitle,
          summary:  this.enteredSumary,
          dueDate:  this.enteredDate
    }
    this.add.emit(task);
    
  }

}
