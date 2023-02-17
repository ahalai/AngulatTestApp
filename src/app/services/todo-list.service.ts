import { Injectable } from '@angular/core';
import { ToDoElement } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  // Ключ списка ToDo в LocalStorage
  readonly toDoListLocalStorageKey: string = "ToDoListKey";

  constructor() { }

  // Получить список ToDo из LocalStorage
  getToDoList(): ToDoElement[] {
    const toDoListString = localStorage.getItem(this.toDoListLocalStorageKey);
    let toDoList: ToDoElement[] = JSON.parse(toDoListString);
    return toDoList;
  }

  // Добавить элемент в список ToDo
  addListElement(text: string): void {
    const todoElement: ToDoElement = { text: text, isDone: false };
    let toDoList: ToDoElement[] = this.getToDoList();

    if (toDoList == null) {
      toDoList = [];
    }

    toDoList.push(todoElement);
    this.setToDoList(toDoList);
  }

  // Обновить элемент списка ToDo
  updateListElement(index: number, updatedElement: ToDoElement): void {
    if (updatedElement == null) return;

    let toDoList = this.getToDoList();
    if (toDoList == null) return;
    if (index < 0 || index > toDoList.length - 1) return;

    toDoList[index].text = updatedElement.text;
    toDoList[index].isDone = updatedElement.isDone;

    this.setToDoList(toDoList);
  }

  // Удалить элемент по индексу из списка ToDo
  removeListElement(index: number): void {
    let toDoList = this.getToDoList();
    if (toDoList == null) return;
    if (index < 0 || index > toDoList.length - 1) return;

    let newToDoList: ToDoElement[];
    if (index == 0) {
      newToDoList = toDoList.slice(1);
    }
    else if (index == toDoList.length - 1) {
      newToDoList = toDoList.slice(0, -1);
    }
    else {
      newToDoList = toDoList.slice(0, index);
      newToDoList = newToDoList.concat(toDoList.slice(index + 1));
    }

    this.setToDoList(newToDoList);
  }

  // Обновить список ToDo в LocalStorage
  private setToDoList(toDoList: ToDoElement[]): void {
    const toDoListString = JSON.stringify(toDoList);
    localStorage.setItem(this.toDoListLocalStorageKey, toDoListString);
  }
}
