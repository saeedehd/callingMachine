import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpResponse,
	HttpErrorResponse,
	HttpRequest
} from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { UpListsResponse } from '../mocks/uplistsResponse.mock-data';

export class UpListsServiceMockInterceptore implements HttpInterceptor {
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (request.url.endsWith('/uplistsrequests/')) {
			return of(new HttpResponse({ status: 200, body: UpListsResponse, url: request.url }));
		}

		if (request.url.includes('/uplistsrequests/') && request.method.toLocaleLowerCase() == 'delete') {
			debugger;
			return of(new HttpResponse({ status: 200, url: request.url }));
		} else {
			return next.handle(request);
		}
	}
}
