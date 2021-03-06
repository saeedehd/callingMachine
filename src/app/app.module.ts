import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UplaodListComponent } from './uplaod-list/uplaod-list.component';
import { DepartmentsComponent } from './departments/departments.component';
import { CallingListsComponent } from './calling-lists/calling-lists.component';
import { LogedInGuard } from './guards/loged-in.guard';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
// import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { Error404Component } from './error404/error404.component';
import { AddDepartmentsComponent } from './add-departments/add-departments.component';
import { UpListsComponent } from './up-lists/up-lists.component';
import { AuthServiceMockInterceptor } from './mock-interceptors/auth-service-mock.interceptor';
import { CallRequestServiceMockInterceptor } from './mock-interceptors/call-request-service-mock.interceptor';
import { DepartmentService } from './services/department.service';
import { MaterialModule } from './material/material.module';
import { UpListsServiceMockInterceptore } from './mock-interceptors/uplists-service-mock-interceptore';
import { DepartmentServiceMockInterceptore } from './mock-interceptors/department-service-mock-interceptor';
export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
	declarations: [
		AppComponent,
		ToolbarComponent,
		LoginComponent,
		DashboardComponent,
		UplaodListComponent,
		DepartmentsComponent,
		CallingListsComponent,
		DepartmentDetailComponent,
		Error404Component,
		AddDepartmentsComponent,
		UpListsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MaterialModule,
		FlexLayoutModule,
		ReactiveFormsModule,

		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [ HttpClient ]
			}
		}),
		FormsModule,
		FileUploadModule
	],
	providers: [
		LogedInGuard,
		DepartmentService,
		// {
		// 	provide: HTTP_INTERCEPTORS,
		// 	useClass: HttpErrorInterceptor,
		// 	multi: true
		// },
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthServiceMockInterceptor,
			multi: true
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: CallRequestServiceMockInterceptor,
			multi: true
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: UpListsServiceMockInterceptore,
			multi: true
		},

		{
			provide: HTTP_INTERCEPTORS,
			useClass: DepartmentServiceMockInterceptore,
			multi: true
		}
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
