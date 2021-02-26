import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoListComponent } from './pages/to-do-list/to-do-list.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ToDoListComponent, ToDoComponent],
  imports: [
    CommonModule,
    ToDoRoutingModule,
    SharedModule
  ]
})
export class ToDoModule { }
