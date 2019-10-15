import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatSort } from '@angular/material';
import { CallResult } from '../interfaces/CallResult';

@Component({
	selector: 'app-calling-lists',
	templateUrl: './calling-lists.component.html',
	styleUrls: [ './calling-lists.component.scss' ]
})
export class CallingListsComponent implements OnInit {
	dataSource = new MatTableDataSource<CallResult>(ELEMENT_DATA);
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
	values = '';
	@ViewChild(MatSort, { static: false })
	sort: MatSort;

	selectedDepartment: CallResult;

	onselect(id: number) {
		console.log(id);
	}

	@ViewChild(MatPaginator, { static: true })
	paginator: MatPaginator;

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
	}

	ngAfterViewInit(): void {
		this.dataSource.sort = this.sort;
	}
	getValue(event: KeyboardEvent) {
		this.values += (event.target as HTMLInputElement).value + ' | ';
		console.log(this.values);
	}

	public doFilter = (value: string) => {
		this.dataSource.filter = value.trim().toLocaleLowerCase();
	};
}

const ELEMENT_DATA: CallResult[] = [
	{
		Customer_ID: 4585545,
		Number: 9124756485,
		Department: 'qm-pcs',
		URL_ID: 75807,
		Add_Date: new Date(2019, 7, 21),
		Retry_Time: 180,
		Lock_Call: 1,
		Attempt: 0,
		Call_Status: 1,
		Call_Duration: 30,
		Info1: ''
	},
	{
		Customer_ID: 456478,
		Number: 9124756487,
		Department: 'qm-pc',
		URL_ID: 757,
		Add_Date: new Date(2019, 8, 12),
		Retry_Time: 260,
		Lock_Call: 0,
		Attempt: 2,
		Call_Status: 0,
		Call_Duration: 50,
		Info1: ''
	}
];
