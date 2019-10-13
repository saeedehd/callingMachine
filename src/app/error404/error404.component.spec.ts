import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Error404Component } from './error404.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('Error404Component', () => {
	let component: Error404Component;
	let fixture: ComponentFixture<Error404Component>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [ RouterModule, RouterTestingModule ],
				declarations: [ Error404Component ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(Error404Component);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
