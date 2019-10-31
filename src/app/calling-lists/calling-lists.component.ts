import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CallRequest } from '../interfaces/call-request.interface';
import { MaterialModule } from '../material/material.module';
import { MatTableDataSource } from '@angular/material';
import { CallingService } from '../services/calling.service';

@Component({
	selector: 'app-calling-lists',
	templateUrl: './calling-lists.component.html',
	styleUrls: ['./calling-lists.component.scss']
})
export class CallingListsComponent {
	callStatusList: number[] = [0, 1];
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
		this.callingService
			.query({ criteria: {}, pageNo: 0 })
			.subscribe((callReqeusts) => (this.dataSource.data = callReqeusts));
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

	search() {
		debugger;
		this.callingService
			.query({
				criteria: {
					Customer_ID: this.ID.value,
					Number: this.Number.value,
					Department: this.Department.value,
					addDate: this.AddDate.value,
					callStatus: this.CallStatus.value
				},
				pageNo: 0
			})
			.subscribe((callReqeusts) => (this.dataSource.data = callReqeusts));
	}

	get ID() { return this.filterForm.get('IdFilter'); }
	get Number() { return this.filterForm.get('NumberFilter'); }
	get Department() { return this.filterForm.get('DepartmentFilter'); }
	get AddDate() { return this.filterForm.get('AddDateFilter'); }
	get CallStatus() { return this.filterForm.get('CallStatusFilter'); }

}