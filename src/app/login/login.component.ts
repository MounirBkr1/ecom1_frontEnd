import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword: boolean;

  constructor(private fb: FormBuilder,
              private  snackBar: MatSnackBar,
              private authService: AuthService, //imported from service
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
  })
  }

  onSubmit():void {
    const username=this.loginForm.get('email')?.value;
    const password= this.loginForm.get('password')?.value;

    this.authService.login(username,password).subscribe(
      (res)=>{
        this.snackBar.open('Login success','ERROR',{duration: 5000});
      },(error)=>{
        this.snackBar.open('Bad Credential','ERROR',{duration: 5000});
      }
    )

  }

  togglePasswordVisibility() {
    this.hidePassword = ! this.hidePassword;
  }
}
