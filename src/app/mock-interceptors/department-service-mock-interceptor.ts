import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
	HttpResponse,
	HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { DepartmentResponse } from '../mocks/departmentResponse.mock-data';

export class DepartmentServiceMockInterceptore implements HttpInterceptor {
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		// if (request.url.endsWith('/departmentrequests/')) {
		// 	return of(new HttpResponse({ status: 200, body: DepartmentResponse, url: request.url }));
		// }

		if (request.url.includes('/departmentrequests') && request.method.toLocaleLowerCase() == 'get') {
			debugger;
			return of(new HttpResponse({ status: 200, body: DepartmentResponse, url: request.url }));
		} else {
			return next.handle(request);
		}
	}
}
