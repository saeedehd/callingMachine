import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UpLists } from '../interfaces/UpLists';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class UplistsService {
	constructor(private http: HttpClient) {
		console.log('sdf');
	}

	list() {
		return this.http.get<{ Result: UpLists[]; total: number; page_no: number }>(
			`${environment.server_ip}/uplistsrequests`
		);
	}
	remove(UpListsID: string): Observable<void> {
		debugger;
		return this.http.delete<void>(`${environment.server_ip}/uplistsrequests/${UpListsID}`);
	}
}
