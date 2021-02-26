import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoListComponent } from './pages/to-do-list/to-do-list.component';

const routes: Routes = [
  {
    path: '',
    component: ToDoListComponent,
    children: [
      {
        path: 'add'
      },
      {
        path: 'edit/:id'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoRoutingModule { }
