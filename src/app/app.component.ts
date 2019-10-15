import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	constructor(private translateSerive: TranslateService) {
		this.translateSerive.setDefaultLang('fa');
	}

	onCreatePost(postData: { title: string; content: string }) {
		console.log(postData);
	}
}
