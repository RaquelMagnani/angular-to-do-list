import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'to-do-list';
  tasks: any[] = [];
  add($event) {
    const task = { ...$event, isComplete: false };
    this.tasks.push(task);
  }
}
