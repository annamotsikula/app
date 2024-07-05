import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

// აქ როუტი მაქვს არასწორი და ვერ გავიგე რა ვქნა

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [ReactiveFormsModule]
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl<string>('', Validators.required),
    password: new FormControl<string>('', Validators.required)
  });

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username as string, password as string).subscribe(
        () => this.router.navigate(['/']),
        //(error) => console.error('Login failed', error)
      );
    }
  }
}
// any ტიპის განსაზღვრა სადღაც არასწორად მაქცს მიწერილი
//.subscribe(() => { 
  //this.router.navigate........
  //} )