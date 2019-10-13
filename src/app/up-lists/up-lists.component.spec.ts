import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpListsComponent } from './up-lists.component';

describe('UpListsComponent', () => {
  let component: UpListsComponent;
  let fixture: ComponentFixture<UpListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
