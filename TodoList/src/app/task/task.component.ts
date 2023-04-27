import { Component } from '@angular/core';
import {BehaviorSubject} from "rxjs";

interface Task {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  tasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');


  addTask(title: HTMLInputElement) {
    const titleName = title.value.trim();
      this.tasks.push({ title: titleName , completed: false });
      this.saveTasks();
      title.value = '';
  }
  archiveTasks (index: number) {
    const archivedTasks = JSON.parse(localStorage.getItem('archivedTasks') || '[]');
    archivedTasks.push(this.tasks[index]);
    localStorage.setItem('archivedTasks', JSON.stringify(archivedTasks));
    this.tasks.splice(index, 1);
    this.saveTasks();

  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
