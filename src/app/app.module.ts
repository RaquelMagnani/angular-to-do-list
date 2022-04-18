import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list/task-list/task-list.component';

@NgModule({
  declarations: [AppComponent, AddTaskComponent, TaskListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
