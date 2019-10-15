import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { RouterTestingModule } from '@angular/router/testing';
=======
>>>>>>> bcff1fd19ec1a0f81bb1063c4d693455d2a46c6c

describe('ToolbarComponent', () => {
	let component: ToolbarComponent;
	let fixture: ComponentFixture<ToolbarComponent>;

<<<<<<< HEAD
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [
					TranslateModule.forRoot(),
					MatIconModule,
					MatToolbarModule,
					RouterModule,
					HttpClientModule,
					RouterTestingModule
				],
				declarations: [ ToolbarComponent ]
			}).compileComponents();
		})
	);
=======
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        MatIconModule,
        MatToolbarModule,
        RouterModule.forRoot([]),
        HttpClientModule
      ],
      declarations: [ToolbarComponent]
    })
      .compileComponents();
  }));
>>>>>>> bcff1fd19ec1a0f81bb1063c4d693455d2a46c6c

	beforeEach(() => {
		fixture = TestBed.createComponent(ToolbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
