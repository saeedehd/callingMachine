import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CallingListsComponent } from './calling-lists/calling-lists.component';
import { DepartmentsComponent } from './departments/departments.component';
import { LogedInGuard } from './guards/loged-in.guard';
import { UplaodListComponent } from './uplaod-list/uplaod-list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { Error404Component } from './error404/error404.component';
import { AddDepartmentsComponent } from './add-departments/add-departments.component';
import { UpListsComponent } from './up-lists/up-lists.component';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{
		path: '',
		component: ToolbarComponent,
		canActivate: [ LogedInGuard ],
		children: [
			{
				path: 'dashboard',
				component: DashboardComponent
			},
			{
				path: 'callingLists',
				component: CallingListsComponent
			},
			{
				path: 'departments',
				component: DepartmentsComponent
			},
			{
				path: 'uploadList',
				component: UplaodListComponent
			},
			{
				path: 'department/:id/edit',
				component: DepartmentDetailComponent
			},
			{
				path: 'departments/Add',
				component: AddDepartmentsComponent
			},
			{
				path: 'UpLists',
				component: UpListsComponent
			}
		]
	},
	{ path: '**', component: Error404Component }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
