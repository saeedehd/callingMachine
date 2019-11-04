import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from '../interfaces/department.interface';

@Injectable({
	providedIn: 'root'
})
export class DepartmentService {
	constructor(private http: HttpClient) {
		console.log('sdf');
	}

	list(): Observable<Department[]> {
		throw new Error();
	}

	remove(DepartmentID): Observable<void> {
		return this.http.delete<void>(`${environment.server_ip}/departmentrequests/${DepartmentID}`);
	}
}
