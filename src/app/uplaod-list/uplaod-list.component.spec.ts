import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UplaodListComponent } from './uplaod-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';

describe('UplaodListComponent', () => {
	let component: UplaodListComponent;
	let fixture: ComponentFixture<UplaodListComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [ TranslateModule.forRoot(), FileUploadModule ],
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
