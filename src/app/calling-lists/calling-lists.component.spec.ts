import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallingListsComponent } from './calling-lists.component';
import { MatIconModule, MatTableModule, MatTableDataSource } from '@angular/material';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('CallingListsComponent', () => {
	let component: CallingListsComponent;
	let fixture: ComponentFixture<CallingListsComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [ MatIconModule, MatTableModule, RouterModule, RouterTestingModule ],
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
