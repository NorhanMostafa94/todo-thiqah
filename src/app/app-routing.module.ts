import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'todoList',
    loadChildren: () => import('./modules/to-do/to-do.module').then(m => m.ToDoModule)
  },
  {
    path: '',
    redirectTo: '/todoList',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
