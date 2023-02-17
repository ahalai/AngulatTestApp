import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QuoteCarouselComponent } from "./components/quote-carousel/quote-carousel.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";

const appRoutes: Routes = [
    { path: 'quotes', component: QuoteCarouselComponent },
    { path: 'todo-list', component: TodoListComponent },
  ];

@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        {
          enableTracing: false, // <-- debugging purposes only
        }
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }