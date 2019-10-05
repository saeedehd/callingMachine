import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallingListsComponent } from './calling-lists.component';

describe('CallingListsComponent', () => {
  let component: CallingListsComponent;
  let fixture: ComponentFixture<CallingListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallingListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallingListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
