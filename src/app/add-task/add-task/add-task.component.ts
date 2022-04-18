import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  @Output() addingTask = new EventEmitter<any>();
  task: string;
  add() {
    console.log('Adicionou a tarefa');
    const newTask = { task: this.task };
    this.addingTask.emit(newTask);
    console.log(newTask);
  }
}
