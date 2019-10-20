import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatSort } from '@angular/material';
import { CallResult } from '../interfaces/CallResult';
import { FormControl } from '@angular/forms';
import { CallingService } from '../services/calling.service';
import { CallRequest } from '../interfaces/call-request.interface';

@Component({
	selector: 'app-calling-lists',
	templateUrl: './calling-lists.component.html',
	styleUrls: [ './calling-lists.component.scss' ]
})
export class CallingListsComponent implements OnInit {
	dataSource = new MatTableDataSource<CallRequest>();
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

	IdFilter = new FormControl();
	NumberFilter = new FormControl();
	DepartmentFilter = new FormControl();
	AddDateFilter = new FormControl();
	CallStatusFilter = new FormControl();

	filteredValues = { Customer_ID: '', Number: '', Department: '', Add_Date: '', Call_Status: '' };

	@ViewChild(MatSort, { static: false })
	sort: MatSort;

	selectedDepartment: CallResult;

	onselect(id: number) {
		console.log(id);
	}

	@ViewChild(MatPaginator, { static: true })
	paginator: MatPaginator;

	constructor(private callingService: CallingService) {
		this.callingService
			.query({ criteria: {}, pageNo: 0 })
			.subscribe((callReqeusts) => (this.dataSource.data = callReqeusts));
	}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;

		this.IdFilter.valueChanges.subscribe((IdFilterValue) => {
			this.filteredValues['Customer_ID'] = IdFilterValue;
			this.dataSource.filter = JSON.stringify(this.filteredValues);
		});

		this.NumberFilter.valueChanges.subscribe((NumberFilterValue) => {
			this.filteredValues['Number'] = NumberFilterValue;
			this.dataSource.filter = JSON.stringify(this.filteredValues);
		});

		this.DepartmentFilter.valueChanges.subscribe((DepartmentFilterValue) => {
			this.filteredValues['Department'] = DepartmentFilterValue;
			this.dataSource.filter = JSON.stringify(this.filteredValues);
		});
		this.AddDateFilter.valueChanges.subscribe((AddDateFilterValue) => {
			this.filteredValues['Add_Date'] = AddDateFilterValue;
			this.dataSource.filter = JSON.stringify(this.filteredValues);
		});

		this.CallStatusFilter.valueChanges.subscribe((CallStatusFilterValue) => {
			this.filteredValues['Call_Status'] = CallStatusFilterValue;
			this.dataSource.filter = JSON.stringify(this.filteredValues);
		});

		this.dataSource.filterPredicate = this.customFilterPredicate();
	}

	remove(item: CallRequest) {
		debugger;
		this.callingService.remove(item.ID).subscribe((res) => {
			// this.sb
			debugger;
		});
	}
	search() {
		this.callingService
			.query({
				criteria: {
					Customer_ID: this.IdFilter.value
				},
				pageNo: 0
			})
			.subscribe((callReqeusts) => (this.dataSource.data = callReqeusts));
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
		this.dataSource.filter = filterValue;
	}

	customFilterPredicate() {
		const myFilterPredicate = function(data: CallResult, filter: string): boolean {
			let searchString = JSON.parse(filter);
			return (
				data.Customer_ID.toString().trim().indexOf(searchString.Customer_ID) !== -1 &&
				data.Number.toString().trim().indexOf(searchString.Number) !== -1 &&
				data.Department.toString().trim().toLowerCase().indexOf(searchString.Department.toLowerCase()) !== -1 &&
				data.Call_Status.toString().trim().indexOf(searchString.Call_Status) !== -1 &&
				data.Add_Date.toString().trim().indexOf(searchString.Add_Date) !== -1
			);
		};
		return myFilterPredicate;
	}

	ngAfterViewInit(): void {
		this.dataSource.sort = this.sort;
	}
}
