// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { catchError, delay, map } from 'rxjs/operators';
// import { throwError, Subject, Observable, of, BehaviorSubject } from 'rxjs';
// import { Router } from '@angular/router';

// import { environment } from 'src/environments/environment';
// import { MOCK_admin_user, MOCK_operator_user } from '../mocks/roles';
// import { User } from '../datamodels';

// @Injectable({
// 	providedIn: 'root'
// })
// export class DepartmentService {
// 	constructor(private http: HttpClient) {}
// 	login({ username, password }: { username: string; password: string }): Observable<User> {
// 		// return this.http
// 		//   .post<User>(`${environment.server_ip}/departments`, { username,password,returnSecureToken: true});

// 		return of(MOCK_admin_user as User).pipe(delay(333));
// 	}
// }
