import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  todos: Todo[] = [
    {
      id: 1,
      name: 'Task1',
      isDone: true
    },
    {
      id: 2,
      name: 'Task2',
      isDone: false
    },
    {
      id: 3,
      name: 'Task3',
      isDone: false
    }
  ];

  todo: Todo;

  isFormOpen: boolean;

  isDeleteModalOpen: boolean;

  todoForm: FormGroup;

  isEditMode: boolean;


  constructor() { }

  ngOnInit(): void {
    this.initTodoForm();

  }

  /**
   * `initTodoForm()` to initialize form
   */
  initTodoForm() {
    this.todoForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    });
  }
  
  /**
   * `openEditForm()` to open form in edit mode
   * @param todo 
   */
  openEditForm(todo: Todo) {
    this.isFormOpen = true;
    this.todo = todo;
    this.todoForm.patchValue(todo);
    this.isEditMode = true;
  }

  /**
   * `openAddForm()` to opem form in add mode
   */
  openAddForm() {
    this.initTodoForm();
    this.isFormOpen = true;
    this.isEditMode = false;
  }

  /**
   * `openDeleteModal()` to open delete modal with this todo
   * @param todo 
   */
  openDeleteModal(todo){
    this.isDeleteModalOpen = true;
    this.todo = todo;
  }

  /**
   * `delete()` to delete todo from todo list
   */
  delete(){
    let index = this.todos.findIndex(todo=>todo.id===this.todo.id);
    this.todos.splice(index,1);
    this.isDeleteModalOpen = false;
  }

  /**
   * `save()` to save form
   */
  save() {
    if (this.isEditMode) {
      this.todos.map((todo, index) => {
        if (todo.id === this.todo.id) {
          todo.name = this.todoForm.get('name').value;
        }
      });
    }
    else {
      this.todo = {
        id: this.todos.length+1,
        name: this.todoForm.get('name').value,
        isDone: false
      }
      this.todos.push(this.todo);
    }
    this.isFormOpen = false;
  }

  /**
   * `cancelForm()` to cancel form and close it
   */
  cancelForm() {
    this.isFormOpen = false;
  }

  /**
   * `cancelDelete()` to cancel delete and close it
   */
  cancelDelete() {
    this.isDeleteModalOpen = false;
  }

}
