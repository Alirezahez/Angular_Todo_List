import { Component } from '@angular/core';

interface Task {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-archived-tasks',
  templateUrl: './archived-tasks.component.html',
  styleUrls: ['./archived-tasks.component.scss']
})
export class ArchivedTaskComponent {
  tasks: Task[] = JSON.parse(localStorage.getItem('archivedTasks') || '[]');

  unarchiveTask(index: number) {
    const mainTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    mainTasks.push(this.tasks[index]);
    localStorage.setItem('tasks', JSON.stringify(mainTasks));

    this.tasks.splice(index, 1);
    localStorage.setItem('archivedTasks', JSON.stringify(this.tasks));
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    localStorage.setItem('archivedTasks', JSON.stringify(this.tasks));
  }
}
