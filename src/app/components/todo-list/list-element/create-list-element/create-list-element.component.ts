import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-create-list-element',
  templateUrl: './create-list-element.component.html',
  styleUrls: ['./create-list-element.component.css']
})
export class CreateListElementComponent implements OnInit {
  elementText: string;
  
  @Output() itemCreated = new EventEmitter();

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
  }

  onCreate(){
    this.todoListService.addListElement(this.elementText);
    this.itemCreated.emit();
  }
}
