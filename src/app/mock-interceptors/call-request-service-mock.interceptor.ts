import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
	HttpResponse,
	HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { CallRequsetResponse } from '../mocks/CallRequsetResponse.mock-data';

export class CallRequestServiceMockInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (request.url.endsWith('/callrequests')) {
			return of(new HttpResponse({ status: 200, body: CallRequsetResponse, url: request.url }));
		}
		// tslint:disable-next-line: triple-equals
		if (request.url.includes('/callrequests/') && request.method.toLowerCase() == 'delete') {
			// tslint:disable-next-line: no-debugger
			debugger;
			return of(new HttpResponse({ status: 200, url: request.url }));
		} else {
			return next.handle(request);
		}
	}
}
