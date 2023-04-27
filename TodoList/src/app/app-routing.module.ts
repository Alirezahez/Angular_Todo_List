import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArchivedTaskComponent} from "./archived-tasks/archived-tasks.component";
import {TaskComponent} from "./task/task.component";

const routes: Routes = [
  { path: '', component: TaskComponent },
  { path: 'archived-tasks', component: ArchivedTaskComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
