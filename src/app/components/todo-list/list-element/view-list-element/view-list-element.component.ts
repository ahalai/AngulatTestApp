import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoElement } from 'src/app/models';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-view-list-element',
  templateUrl: './view-list-element.component.html',
  styleUrls: ['./view-list-element.component.css']
})
export class ViewListElementComponent implements OnInit {
  @Input() item: ToDoElement;
  @Input() itemIndex: number;

  @Output() itemChanged = new EventEmitter();

  isEdit: boolean;

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.isEdit = false;
  }

  onChanged() {
    this.todoListService.updateListElement(this.itemIndex, this.item);
    this.itemChanged.emit();
  }

  onDelete() {
    this.todoListService.removeListElement(this.itemIndex);
    this.itemChanged.emit();
  }

  onSave() {
    this.isEdit = false;
    this.todoListService.updateListElement(this.itemIndex, this.item);
    this.itemChanged.emit();
  }

  onEdit(){
    this.isEdit = true;
  }
}
