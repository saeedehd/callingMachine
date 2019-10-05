import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, delay, map } from 'rxjs/operators';
import { throwError, Subject, Observable, of, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../datamodels/user.model';
import { MOCK_admin_user, MOCK_operator_user } from '../mocks/roles';

const LOCAL_STORAGE_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User>(null);
  
  constructor(private http: HttpClient , private router: Router) { 
    var stringified_user = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stringified_user) {
      const user = JSON.parse(stringified_user);
      this.user.next(user);
    }
    this.user.subscribe((user)=> {
      if (user) localStorage.setItem(LOCAL_STORAGE_KEY , JSON.stringify(user));
      else localStorage.removeItem(LOCAL_STORAGE_KEY);
    })
  }

  /*/ logout /*/

  logout()  {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    this.user.next(null);
    this.router.navigate(['/login']);
  }

  /*/login /*/

	login({ username, password }: { username: string; password: string }): Observable<User> {
		return of(MOCK_admin_user as User).pipe(delay(333)).pipe(
			catchError(this.handleError),
			map((resData) => {
				return this.handleAuthentication(resData);
			})
		);
  }
  private handleAuthentication(user: User) {
		var user = new User(user);
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
