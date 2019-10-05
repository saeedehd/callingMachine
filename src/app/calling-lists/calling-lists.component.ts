import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { List } from '../interfaces/list';

@Component({
  selector: 'app-calling-lists',
  templateUrl: './calling-lists.component.html',
  styleUrls: ['./calling-lists.component.scss']
})
export class CallingListsComponent implements OnInit {
  dataSource = new MatTableDataSource<List>(ELEMENT_DATA);
  // tslint:disable-next-line: max-line-length
  displayedColumns: string[] = [ 'listID', 'department',  'numberOfCall', 'numberOfDailed', 'status', 'action'];

   selectedDepartment: List;

   onselect(id: number) { console.log(id)};

  @ViewChild( MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

const ELEMENT_DATA: List[] = [
  {
    listID: 1,
    department: 'qm-pcs',
    numberOfCall: 1500,
    numberOfDailed: 500,
    status: 'run'
  },
  {
    listID: 2,
    department: 'qm-pcs',
    numberOfCall: 3000,
    numberOfDailed: 1000,
    status: 'run'
  }
]
