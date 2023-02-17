import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateListElementComponent } from './create-list-element.component';

describe('CreateListElementComponent', () => {
  let component: CreateListElementComponent;
  let fixture: ComponentFixture<CreateListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
