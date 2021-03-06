import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { CallRequest } from '../interfaces/call-request.interface';
import { CallingRequestQueryRequest } from '../interfaces/calling-request-query-request.interface';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class CallingService {
	constructor(private http: HttpClient) {
		console.log('sdf');
	}

	query(
		data: CallingRequestQueryRequest
	): Observable<{ Result: CallRequest[]; total_items: number; page_no: number }> {
		return this.http.get<{ Result: CallRequest[]; total_items: number; page_no: number }>(
			`${environment.server_ip}/callrequests`
		);
	}

	remove(callRequestID): Observable<void> {
		return this.http.delete<void>(`${environment.server_ip}/callrequests/${callRequestID}`);
	}
}
