import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
	HttpResponse,
	HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { MOCK_admin_user, MOCK_operator_user } from '../mocks/roles';

export class AuthServiceMockInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		debugger;

		if (request.url.endsWith('/login')) {
			if (request.body.username == 'admin') {
				return of(new HttpResponse({ status: 200, body: MOCK_admin_user, url: request.url }));
			} else if (request.body.username == 'user') {
				return of(new HttpResponse({ status: 200, body: MOCK_operator_user, url: request.url }));
			}
		} else if (request.url.endsWith('/logout')) {
		}
	}
}
