import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { Department } from '../interfaces/department';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  dataSource = new MatTableDataSource<Department>(ELEMENT_DATA);
  // tslint:disable-next-line: max-line-length
  displayedColumns: string[] = [ 'enable', 'priority',  'department', 'start_working_time', 'end_working_time', 'nwd_table_id', 'queue', 'query_method', 'url_id', 'call_more',  'retry_time', 'action'];

   selectedDepartment: Department;

   onselect(id: number) { console.log(id)};

  @ViewChild( MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

const ELEMENT_DATA: Department[] = [
  {

    enable: 1,
    id: 1,
    priority: 7,
    department: 'qm-pcs',
    start_working_time: '8:00:00',
    end_working_time: '17:50:00',
    nwd_table_id: 1,
    dialplan_context: 'calling-machine-cmqm1-start',
    queue: 'cmqm1',
    query_method: 'QS1',
    url_id: 3,
    call_more: 1,
    retry_time: 180,
  },
  {
    enable: 1,
    id: 1,
    priority: 7,
    department: 'qm-pcs',
    start_working_time: '8:00:00',
    end_working_time: '17:50:00',
    nwd_table_id: 1,
    dialplan_context: 'calling-machine-cmqm1-start',
    queue: 'cmqm1',
    query_method: 'QS1',
    url_id: 3,
    call_more: 1,
    retry_time: 180,
  },
  {
    enable: 1,
    id: 2,
    priority: 7,
    department: 'qm-pcs',
    start_working_time: '8:00:00',
    end_working_time: '17:50:00',
    nwd_table_id: 1,
    dialplan_context: 'calling-machine-cmqm1-start',
    queue: 'cmqm1',
    query_method: 'QS1',
    url_id: 3,
    call_more: 1,
    retry_time: 180,
  },
  {
    enable: 1,
    id: 3,
    priority: 7,
    department: 'qm-pcs',
    start_working_time: '8:00:00',
    end_working_time: '17:50:00',
    nwd_table_id: 1,
    dialplan_context: 'calling-machine-cmqm1-start',
    queue: 'cmqm1',
    query_method: 'QS1',
    url_id: 3,
    call_more: 1,
    retry_time: 180,
  },
  {
    enable: 1,
    id: 4,
    priority: 7,
    department: 'qm-pcs',
    start_working_time: '8:00:00',
    end_working_time: '17:50:00',
    nwd_table_id: 1,
    dialplan_context: 'calling-machine-cmqm1-start',
    queue: 'cmqm1',
    query_method: 'QS1',
    url_id: 3,
    call_more: 1,
    retry_time: 180,
  }
]