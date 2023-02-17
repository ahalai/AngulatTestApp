import { Component, OnInit } from '@angular/core';
import { ToDoElement } from 'src/app/models';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoListElements: ToDoElement[] = [];

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.getToDoListElements();
  }

  getToDoListElements() {
    this.todoListElements = this.todoListService.getToDoList();
  }

  onChange() {
    this.getToDoListElements();
  }
}
