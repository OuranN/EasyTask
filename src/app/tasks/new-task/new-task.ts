import { Component, output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {


  isEndingAddTask = output();

  onEndNewTask(){
    this.isEndingAddTask.emit()
  }

}
