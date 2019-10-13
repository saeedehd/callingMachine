import { TestBed, async, inject } from '@angular/core/testing';

import { LogedInGuard } from './loged-in.guard';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('LogedInGuard', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ HttpClientModule, RouterModule, RouterTestingModule ],
			providers: [ LogedInGuard ]
		});
	});

	it(
		'should ...',
		inject([ LogedInGuard ], (guard: LogedInGuard) => {
			expect(guard).toBeTruthy();
		})
	);
});
