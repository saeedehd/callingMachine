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

	remove(UpListsID): Observable<void> {
		return this.http.delete<void>(`${environment.server_ip}/uplistsrequests/${UpListsID}`);
	}
}
