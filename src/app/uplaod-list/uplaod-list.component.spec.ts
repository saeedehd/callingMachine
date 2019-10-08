import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UplaodListComponent } from './uplaod-list.component';
import { FileUploadModule } from 'ng2-file-upload';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

describe('UplaodListComponent', () => {
	let component: UplaodListComponent;
	let fixture: ComponentFixture<UplaodListComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [ HttpClientModule, NgModule, FileUploadModule ],
				declarations: [ UplaodListComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(UplaodListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
