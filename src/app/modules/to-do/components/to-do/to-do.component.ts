import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  @Input('todo') todo:Todo;
  @Output('onEdit') onEdit = new EventEmitter<any>();
  @Output('onDelete') onDelete = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * `edit()` to emit todo item to edit it
   * @param todo 
   */
  edit(todo){
    this.onEdit.emit(todo);
  }

   /**
   * `delete()` to emit todo item to delete it
   * @param todo 
   */
  delete(todo){
    this.onDelete.emit(todo);
  }

}
