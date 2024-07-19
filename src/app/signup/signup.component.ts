import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm: FormGroup;
  hidePassword: boolean;

  constructor(private fb: FormBuilder,
              private  snackBar: MatSnackBar,
              private authService: AuthService, //imported from service
              private router: Router) {
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],

    })
  }


  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit() {
    const password = this.signupForm.get('password')?.value;
    const confirmPasssword = this.signupForm.get('confirmPassword')?.value;

    if (password !== confirmPasssword) {
      this.snackBar.open('Password do not mutch', 'Close', {duration: 5000, panelClass: 'error-snackbar'});
      return;
    }

     this.authService.register(this.signupForm.value).subscribe(
      (response:any) => {
        this.snackBar.open('Sign up successfull', 'Close', {duration: 5000, panelClass: 'error-snackbar'});
        this.router.navigateByUrl("/login");
      },
      (error:any) => {
        this.snackBar.open('Sign up failed, please try again', 'Close', {duration: 5000, panelClass: 'error-snackbar'});
      }
     )
  }

}
