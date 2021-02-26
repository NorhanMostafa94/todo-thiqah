import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoListComponent } from './pages/to-do-list/to-do-list.component';


@NgModule({
  declarations: [ToDoListComponent],
  imports: [
    CommonModule,
    ToDoRoutingModule
  ]
})
export class ToDoModule { }
