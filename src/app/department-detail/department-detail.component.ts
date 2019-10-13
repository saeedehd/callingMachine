import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';

export interface Num {
	value: string;
	viewValue: string;
}
@Component({
	selector: 'app-department-detail',
	templateUrl: './department-detail.component.html',
	styleUrls: [ './department-detail.component.scss' ]
})
export class DepartmentDetailComponent implements OnInit {
	// tslint:disable-next-line: member-ordering
	num: Num[] = [ { value: '0', viewValue: '0' }, { value: '1', viewValue: '1' } ];

	formGroup: FormGroup;
	snackbar: any;
	constructor(
		private authService: AuthService,
		private router: ActivatedRoute // private snackbar: MatSnackBar, // private snackbar: MatSnackBar
	) {
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

	ngOnInit() {
		this.router.params.pipe(pluck('id')).subscribe((id) => {});
	}

	edit() {
		if (this.formGroup.invalid) {
			return this.snackbar.open(' اطلاعات کامل نیست', null, { duration: 999 });
		} else {
			// tslint:disable-next-line: no-unused-expression
			this.formGroup.valid;
		}
		return this.snackbar.open('اطلاعات ثبت شد ', null, { duration: 999 });

		this.authService.login(this.formGroup.value).subscribe(
			(resData) => {
				console.log(resData);
			},
			(errorMessage) => {
				this.snackbar.open('noch', null, { duration: 999 });
				console.log(errorMessage);
			}
		);
	}
}
