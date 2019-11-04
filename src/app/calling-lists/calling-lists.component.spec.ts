import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallingListsComponent } from './calling-lists.component';
import {
	MatIconModule,
	MatTableModule,
	MatTableDataSource,
	MatFormFieldModule,
	MatOptionModule,
	MatSelectModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('CallingListsComponent', () => {
	let component: CallingListsComponent;
	let fixture: ComponentFixture<CallingListsComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [
					MatIconModule,
					MatTableModule,
					RouterModule,
					RouterTestingModule,
					ReactiveFormsModule,
					MatFormFieldModule,
					MatOptionModule,
					MatSelectModule
				],
				declarations: [ CallingListsComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(CallingListsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
