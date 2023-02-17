import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-create-list-element',
  templateUrl: './create-list-element.component.html',
  styleUrls: ['./create-list-element.component.css']
})
export class CreateListElementComponent implements OnInit {
  @Output() itemCreated = new EventEmitter();

  elementText: string;
  createForm!: FormGroup;

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.createForm = new FormGroup({
      task: new FormControl(this.elementText, [
        Validators.required,
        Validators.pattern(/[\S]/)
      ]),
    });
  }

  onCreate() {
    if (!this.isValid()) return;
    this.todoListService.addListElement(this.elementText);
    this.itemCreated.emit();
  }

  isValid(): boolean {
    return this.task.valid;
  }

  get task() { return this.createForm.get('task')!; }
}
