import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsComponent } from './departments.component';
import { MatIconModule, MatTableModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('DepartmentsComponent', () => {
	let component: DepartmentsComponent;
	let fixture: ComponentFixture<DepartmentsComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [
					MatIconModule,
					MatTableModule,
					TranslateModule,
					RouterTestingModule,
					TranslateModule.forRoot(),
					RouterModule
				],
				declarations: [ DepartmentsComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(DepartmentsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
