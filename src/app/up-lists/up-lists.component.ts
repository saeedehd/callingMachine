import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { UpLists } from '../interfaces/UpLists';
@Component({
	selector: 'app-up-lists',
	templateUrl: './up-lists.component.html',
	styleUrls: [ './up-lists.component.scss' ]
})
export class UpListsComponent implements OnInit {
	// tslint:disable-next-line: no-use-before-declare
	dataSource = new MatTableDataSource<UpLists>(ELEMENT_DATA);

	displayedColumns: string[] = [
		'ListID',
		'CustomerID',
		'info',
		'AllRecords',
		'SuccessRecords',
		'department',
		'Date',
		'add_date',
		'Last_attempt_date',
		'lock_call',
		'call_status',
		'call_duration',
		'actions'
	];

	selectedDepartment: UpLists;

	@ViewChild(MatPaginator, { static: true })
	paginator: MatPaginator;

	onselect(id: number) {
		console.log(id);
	}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
	}
}

const ELEMENT_DATA: UpLists[] = [
	{
		ListID: 1,
		AllRecords: 2,
		SuccessRecords: 'qm',
		Date: '2019/10/11',
		actions: 'delete',
		CustomerID: 12,
		department: 'qm',
		add_date: '2019/10/13',
		Last_attempt_date: '2019/10/12',
		lock_call: 2,
		call_status: 3,
		call_duration: 23,
		info: 'jafarian'
	},

	{
		ListID: 1,
		AllRecords: 2,
		SuccessRecords: 'qm',
		Date: '2019/10/11',
		actions: 'delete',
		CustomerID: 12,
		department: 'qm',
		add_date: '2019/10/13',
		Last_attempt_date: '2019/10/12',
		lock_call: 2,
		call_status: 3,
		call_duration: 23,
		info: 'jafarian'
	},

	{
		ListID: 1,
		AllRecords: 2,
		SuccessRecords: 'qm',
		Date: '2019/10/11',
		actions: 'delete',
		CustomerID: 12,
		department: 'qm',
		add_date: '2019/10/13',
		Last_attempt_date: '2019/10/12',
		lock_call: 2,
		call_status: 3,
		call_duration: 23,
		info: 'jafarian'
	},

	{
		ListID: 1,
		AllRecords: 2,
		SuccessRecords: 'qm',
		Date: '2019/10/11',
		actions: 'delete',
		CustomerID: 12,
		department: 'qm',
		add_date: '2019/10/13',
		Last_attempt_date: '2019/10/12',
		lock_call: 2,
		call_status: 3,
		call_duration: 23,
		info: 'jafarian'
	}
];
