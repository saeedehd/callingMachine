import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CallRequest } from '../interfaces/call-request.interface';
import { MaterialModule } from '../material/material.module';
import { MatTableDataSource } from '@angular/material';
import { CallingService } from '../services/calling.service';

@Component({
	selector: 'app-calling-lists',
	templateUrl: './calling-lists.component.html',
	styleUrls: [ './calling-lists.component.scss' ]
})
export class CallingListsComponent {
	callStatusList: number[] = [ 0, 1 ];
	current_page: number;
	total: number;
	displayedColumns: string[] = [
		'Customer_ID',
		'Number',
		'Department',
		'URL_ID',
		'Add_Date',
		'Retry_Time',
		'Lock_Call',
		'Attempt',
		'Call_Status',
		'Call_Duration',
		'Info1',
		'action'
	];
	dataSource = new MatTableDataSource<CallRequest>();

	constructor(private callingService: CallingService) {
		this.current_page = 0;
		this.search({ page_no: 0 });
	}
	// form group
	filterForm = new FormGroup({
		IdFilter: new FormControl(),
		NumberFilter: new FormControl(),
		DepartmentFilter: new FormControl(),
		AddDateFilter: new FormControl(),
		CallStatusFilter: new FormControl()
	});

	remove(item: CallRequest) {
		debugger;
		this.callingService.remove(item.ID).subscribe((res) => {
			debugger;
			// this.sb
		});
	}

	search({ page_no } = {} as any) {
		this.callingService
			.query({
				criteria: this.filterForm.value,
				pageNo: page_no || 0
			})
			.subscribe((res) => {
				this.dataSource.data = res.Result;
				this.current_page = res.page_no;
				this.total = res.total_items;
			});
	}

	next_page() {
		this.search({ page_no: ++this.current_page });
	}

	get ID() {
		return this.filterForm.get('IdFilter');
	}
	get Number() {
		return this.filterForm.get('NumberFilter');
	}
	get Department() {
		return this.filterForm.get('DepartmentFilter');
	}
	get AddDate() {
		return this.filterForm.get('AddDateFilter');
	}
	get CallStatus() {
		return this.filterForm.get('CallStatusFilter');
	}
}
