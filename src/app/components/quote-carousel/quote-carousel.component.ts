import { Component, OnInit } from '@angular/core';
import { Qoute } from 'src/app/models';

@Component({
  selector: 'app-quote-carousel',
  templateUrl: './quote-carousel.component.html',
  styleUrls: ['./quote-carousel.component.css']
})
export class QuoteCarouselComponent implements OnInit {
  quotes: Qoute[] = [
    { title: "Планы - ничто, планирование - все.", author: "Хельмут фон Мольтке" },
    { title: "Хороший план сегодня лучше безупречного завтра.", author: "Закон Паттона" },
    { title: "Жизнь без плана - жизнь впустую!", author: "А.С. Пушкин" },
    { title: "Плох тот план, который нельзя изменить.", author: "Публилий Сир" },
    { title: "План отличается от мечты только количеством израсходованной бумаги.", author: "В. Гжегорчик" }
  ];
  currentQouteIndex: number;

  constructor() { }

  ngOnInit() {
    this.currentQouteIndex = 0;
  }

  getNextQuote(){
    this.currentQouteIndex++;
    if (this.currentQouteIndex >= this.quotes.length){
      this.currentQouteIndex = 0;
    }
  }
}
