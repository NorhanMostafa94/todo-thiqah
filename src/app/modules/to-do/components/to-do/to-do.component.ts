import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  @Input('todo') todo:Todo;

  constructor() { }

  ngOnInit(): void {
  }

}
