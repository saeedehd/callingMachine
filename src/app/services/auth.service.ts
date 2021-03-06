import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, delay, map } from 'rxjs/operators';
import { throwError, Subject, Observable, of, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { MOCK_admin_user, MOCK_operator_user } from '../mocks/roles';
import { User } from '../datamodels';
import { JsonPipe } from '@angular/common';

const LOCAL_STORAGE_KEY = 'user';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	user = new BehaviorSubject<User>(null);
	constructor(private http: HttpClient, private router: Router) {
		const stringifiedUser = localStorage.getItem(environment.LOCAL_STORAGE_KEY);
		if (stringifiedUser) {
			const user = JSON.parse(stringifiedUser);
			this.user.next(user);
		}

		this.user.subscribe((user) => {
			if (user) localStorage.setItem(environment.LOCAL_STORAGE_KEY, JSON.stringify(user));
			else localStorage.removeItem(environment.LOCAL_STORAGE_KEY);
		});
	}

	logout() {
		this.http.get<User>(`${environment.server_ip}/logout`).subscribe((res) => {
			localStorage.removeItem(environment.LOCAL_STORAGE_KEY);
			this.user.next(null);
			this.router.navigate([ '/login' ]);
		});
	}

	login({ username, password }: { username: string; password: string }): Observable<User> {
		return this.http
			.post<User>(`${environment.server_ip}/login`, { username, password, returnSecureToken: true })
			.pipe(
				map((resData) => {
					return this.handleAuthentication(resData);
				})
			);
	}

	private handleAuthentication(userData: User) {
		const user = new User(userData);
		this.user.next(user);
		return user;
	}

	private handleError(errorRes: HttpErrorResponse) {
		let errorMessage = 'An unknown error occurred!';
		if (!errorRes.error || !errorRes.error.error) {
			return throwError(errorMessage);
		}
		switch (errorRes.error.error.message) {
			case 'USERNAME_EXISTS':
				errorMessage = 'This Username exists already';
				break;
			case 'USERNAME_NOT_FOUND':
				errorMessage = 'This username does not exist.';
				break;
			case 'INVALID_PASSWORD':
				errorMessage = 'This password is not correct.';
				break;
		}
		return throwError(errorMessage);
	}
}
