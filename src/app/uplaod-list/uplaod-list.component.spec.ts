import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UplaodListComponent } from './uplaod-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { FileUploadModule } from 'ng2-file-upload';
import { MatFormFieldModule, MatCardModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UplaodListComponent', () => {
	let component: UplaodListComponent;
	let fixture: ComponentFixture<UplaodListComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [
					TranslateModule.forRoot(),
					FileUploadModule,
					MatFormFieldModule,
					ReactiveFormsModule,
					MatCardModule,
					MatInputModule,
					BrowserAnimationsModule
				],
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
