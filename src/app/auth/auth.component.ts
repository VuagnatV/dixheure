import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  login: boolean = false
  submittedRegister = false
  submittedLogin = false

  loginForm!: FormGroup;
  registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  }, {
    validators: this.passwordMatch
  });


  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl(''),
      password: new FormControl(''),
    })


  }

  passwordMatch(formGroup: FormGroup) {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');
    return password?.value === confirmPassword?.value ? null : { passwordNotMatch: true };
  }

  formError() {
    console.log(this.registerForm.errors)
    if (this.registerForm.errors?.['required']) return 'Champs obligatoires manquant'
    if (this.registerForm.errors?.['passwordNotMatch']) return 'Les mots de passe ne correspondent pas'
    return 'Une erreur est survenu'
  }

  authenticate() {

    const { email, password } = this.loginForm.value;
    this.authService.getUser({ email, password }).subscribe({
      next: (data) => {
        console.log(data)
        if (data.length == 0) {
          this.submittedLogin = true
        } else {
          if (data[0].password == password) {
            this.router.navigate(['/home'])
          }
        }
      }, error: (e) => {
        this.submittedLogin = true
      }
    })
  }

  register(): void {
    this.submittedRegister = true
    if (this.registerForm.invalid) {
      return
    }
    const { email, password, confirmPassword } = this.registerForm.value;
    this.authService.createUser({ email, password }).subscribe({
      next: (data) => {
        this.router.navigate(['/home'])
      },
      error: (e) => {

      }
    })
  }

  switch() {
    this.login = !this.login
  }
}