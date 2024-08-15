import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  Login() {
    if (this.loginForm.valid) {
      const bodyData = this.loginForm.value;
      console.log('----------->',this.loginForm.value);
      this.http.post<{ message: string, username?: string }>('http://localhost:8092/auth1/login', bodyData).subscribe({
        next: (resultData) => {
          console.log(resultData);
          if (resultData.message === "Invalid credentials") {
            alert("Ressayer plus tard");
          } else if (resultData.message === "Login successful!") {
            if (resultData.username) {
              localStorage.setItem('username', resultData.username);
            }
            this.router.navigateByUrl('/dashboard');
          } else {
            alert("Incorrect username and password not match");
          }
        },
        error: (error: HttpErrorResponse) => {
          console.error('An error occurred,????????:', error.error , this.loginForm);
          alert("An error occurred: " + error.message);
        }
      });
    } else {
      alert("Please fill in both fields.");
    }
  }
}


