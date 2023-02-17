import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  viewForm!: FormGroup;

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.isEdit = false;
    this.viewForm = new FormGroup({
      text: new FormControl(this.item.text, [
        Validators.required,
        Validators.pattern(/[\S]/)
      ]),
      isDone: new FormControl(this.item.isDone),
    });
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
    if (!this.isValid()) return;
    this.isEdit = false;
    this.todoListService.updateListElement(this.itemIndex, this.item);
    this.itemChanged.emit();
  }

  onEdit(){
    this.isEdit = true;
  }
  
  isValid(): boolean {
    return this.text.valid;
  }

  get text() { return this.viewForm.get('text')!; }
}
