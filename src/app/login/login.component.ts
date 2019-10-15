import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { AuthService } from '../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formGroup: FormGroup;

  constructor(private router: Router, private authService: AuthService, private snackbar: MatSnackBar) {
    this.formGroup = this.create_form_group();
  }

  private create_form_group() {
    return new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(15)])
    });
  }

  submit() {
    if (this.formGroup.invalid) {
      return this.snackbar.open('اطلاعات صحیح نیست', null, { duration: 999 });
    }

    this.authService.login(this.formGroup.value).subscribe(() => {
      this.snackbar.open('به پنل خوش آمدید', null, { duration: 2222 });
      this.router.navigate(['/dashboard']);
    });
  }
}
