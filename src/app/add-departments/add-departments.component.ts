import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material';

export interface Num {
	value: string;
	viewValue: string;
}

@Component({
	selector: 'app-add-departments',
	templateUrl: './add-departments.component.html',
	styleUrls: [ './add-departments.component.scss' ]
})
export class AddDepartmentsComponent {
	num: Num[] = [ { value: '1', viewValue: '1' }, { value: '2', viewValue: '2' } ];

	formGroup: FormGroup;
	constructor(private snackbar: MatSnackBar) {
		this.formGroup = new FormGroup({
			enable: new FormControl('1', [ Validators.required ]),
			priority: new FormControl('', [ Validators.required ]),
			department: new FormControl('', [ Validators.required ]),
			start_working_time: new FormControl(''),
			end_working_time: new FormControl(''),
			nwd_table_id: new FormControl({ value: '', disabled: true }),
			queue: new FormControl(''),
			url_id: new FormControl(''),
			query_method: new FormControl(''),
			call_more: new FormControl(''),
			retry_time: new FormControl('')
		});
	}
	edit() {
		if (this.formGroup.invalid) {
			return this.snackbar.open(' اطلاعات کامل نیست', null, { duration: 999 });
		}

		return this.snackbar.open('اطلاعات ثبت شد ', null, { duration: 999 });
	}
}
