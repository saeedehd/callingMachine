import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UplaodListComponent } from './uplaod-list.component';

describe('UplaodListComponent', () => {
  let component: UplaodListComponent;
  let fixture: ComponentFixture<UplaodListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UplaodListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UplaodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
