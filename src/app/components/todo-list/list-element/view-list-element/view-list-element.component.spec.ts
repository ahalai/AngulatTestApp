import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListElementComponent } from './view-list-element.component';

describe('ViewListElementComponent', () => {
  let component: ViewListElementComponent;
  let fixture: ComponentFixture<ViewListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
