import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { DepartmentService } from '../services/department.service';
import { Department } from '../interfaces/department.interface';

// import { DepartmentService } from '../services/department.service';
@Component({
	selector: 'app-departments',
	templateUrl: './departments.component.html',
	styleUrls: [ './departments.component.scss' ]
})
export class DepartmentsComponent implements OnInit {
	// tslint:disable-next-line: no-use-before-declare
	dataSource = new MatTableDataSource<Department>([]);
	// tslint:disable-next-line: max-line-length
	displayedColumns: string[] = [
		'info',
		'priority',
		'department',
		'Unit',
		'start_working_time',
		'end_working_time',
		'queue',
		'query_method',
		'call_more',
		'retry_time',
		'action'
	];

	selectedDepartment: Department;

	@ViewChild(MatPaginator, { static: true })
	paginator: MatPaginator;

	// tslint:disable-next-line: no-shadowed-variable
	constructor(private DepartmentService: DepartmentService) {
		this.DepartmentService.list().subscribe((response) => {
			this.dataSource.data = response.Result;
		});

		// this.DepartmentService.remove({ criteria: {}, pageNo: 0 }).subscribe((response: any) => {
		// 	this.dataSource.data = response;
		// 	this.DepartmentService.edit({ criteria: {}, pageNo: 0 }).subscribe((response: any) => {
		// 		this.dataSource.data = response;
		// 	});
		// });
	}

	remove(item: Department) {
		// tslint:disable-next-line: no-debugger
		debugger;
		this.DepartmentService.remove(item.id).subscribe((res) => {
			// tslint:disable-next-line: no-debugger
			debugger;
		});
	}

	onselect(id: number) {
		console.log(id);
	}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
	}
}

// const ELEMENT_DATA: Department[] = [
// 	{
// 		info: 'jafarian',
// 		id: 1,
// 		priority: 7,
// 		department: 'qm-pcs',
// 		Unit: 'cts',
// 		start_working_time: '8:00:00',
// 		end_working_time: '17:50:00',
// 		dialplan_context: 'calling-machine-cmqm1-start',
// 		queue: 'cmqm1',
// 		query_method: 'QS1',
// 		call_more: 1,
// 		retry_time: 180
// 	},
// 	{
// 		info: 'jafarian',
// 		id: 1,
// 		priority: 7,
// 		department: 'qm-pcs',
// 		Unit: 'qm',
// 		start_working_time: '8:00:00',
// 		end_working_time: '17:50:00',
// 		// nwd_table_id: 1,
// 		dialplan_context: 'calling-machine-cmqm1-start',
// 		queue: 'cmqm1',
// 		query_method: 'QS1',
// 		call_more: 1,
// 		retry_time: 180
// 	},
// 	{
// 		info: 'jafarian',
// 		id: 2,
// 		priority: 7,
// 		department: 'qm-pcs',
// 		Unit: 'pcs',
// 		start_working_time: '8:00:00',
// 		end_working_time: '17:50:00',
// 		// nwd_table_id: 1,
// 		dialplan_context: 'calling-machine-cmqm1-start',
// 		queue: 'cmqm1',
// 		query_method: 'QS1',
// 		call_more: 1,
// 		retry_time: 180
// 	},
// 	{
// 		info: 'jafarian',
// 		id: 3,
// 		priority: 7,
// 		department: 'qm-pcs',
// 		Unit: 'qm',
// 		start_working_time: '8:00:00',
// 		end_working_time: '17:50:00',
// 		// nwd_table_id: 1,
// 		dialplan_context: 'calling-machine-cmqm1-start',
// 		queue: 'cmqm1',
// 		query_method: 'QS1',
// 		call_more: 1,
// 		retry_time: 180
// 	},
// 	{
// 		info: 'jafarian',
// 		id: 4,
// 		priority: 7,
// 		department: 'qm-pcs',
// 		Unit: 'cts',
// 		start_working_time: '8:00:00',
// 		end_working_time: '17:50:00',
// 		// nwd_table_id: 1,
// 		dialplan_context: 'calling-machine-cmqm1-start',
// 		queue: 'cmqm1',
// 		query_method: 'QS1',
// 		call_more: 1,
// 		retry_time: 180
// 	}
// ];
