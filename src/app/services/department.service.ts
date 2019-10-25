import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class DepartmentService {
	constructor(private http: HttpClient) {
		console.log('sdf');
	}

	remove(DepartmentID): Observable<void> {
		return this.http.delete<void>(`${environment.server_ip}/departmentrequests/${DepartmentID}`);
	}
}
