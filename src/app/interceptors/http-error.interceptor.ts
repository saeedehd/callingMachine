import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
	HttpResponse,
	HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

export class HttpErrorInterceptor implements HttpInterceptor {
	constructor(private sb: MatSnackBar) {}
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(
			retry(1),
			catchError((error: HttpErrorResponse) => {
				// tslint:disable-next-line: no-debugger
				let errorMessage = '';
					// client-side error
					errorMessage = `Error: ${error.error.message}`;
				} else {
					// server-side error
					errorMessage = `${error.message}`;
				}

				this.sb.open(errorMessage, null, { duration: 999 });

				return throwError(errorMessage);
			})
		);
	}
}
