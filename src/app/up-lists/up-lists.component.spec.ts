import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpListsComponent } from './up-lists.component';
import { MatTableModule, MatIconModule } from '@angular/material';
import { RouterModule, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('UpListsComponent', () => {
	let component: UpListsComponent;
	let fixture: ComponentFixture<UpListsComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [ MatTableModule, MatIconModule, RouterModule, RouterTestingModule ],
				declarations: [ UpListsComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(UpListsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
