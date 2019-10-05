import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FileUploadModule } from 'ng2-file-upload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UplaodListComponent } from './uplaod-list/uplaod-list.component';
import { DepartmentsComponent } from './departments/departments.component';
import { CallingListsComponent } from './calling-lists/calling-lists.component';

import { 
  MatIconModule,
	MatToolbarModule,
	MatListModule,
	MatSnackBarModule,
	MatButtonModule,
	MatCardModule,
	MatFormFieldModule,
	MatInputModule,
  MatTableModule,
  MatMenuModule,
  MatSelectModule,
  MatBottomSheetModule,
  MatTooltipModule
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

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
    DepartmentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    FileUploadModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    NoopAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatMenuModule,
    MatSelectModule,
    MatBottomSheetModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
