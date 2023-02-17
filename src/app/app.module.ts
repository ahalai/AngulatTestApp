import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuoteCarouselComponent } from './components/quote-carousel/quote-carousel.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CreateListElementComponent } from './components/todo-list/list-element/create-list-element/create-list-element.component';
import { ViewListElementComponent } from './components/todo-list/list-element/view-list-element/view-list-element.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteCarouselComponent,
    TodoListComponent,
    CreateListElementComponent,
    ViewListElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
