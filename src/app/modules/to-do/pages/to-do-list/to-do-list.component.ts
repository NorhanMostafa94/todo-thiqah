import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  todos: Todo[] = [
    {
      id: '1',
      name: 'Task1',
      isDone: true
    },
    {
      id: '2',
      name: 'Task2',
      isDone: false
    },
    {
      id: '3',
      name: 'Task3',
      isDone: false
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
