import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'callingMachine';
	constructor(private translateSerive: TranslateService) {
		this.translateSerive.setDefaultLang('fa');
	}

	onCreatePost(postData: { title: string; content: string }) {
		console.log(postData);
	}
}
