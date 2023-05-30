import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserRegister } from 'src/app/models/register';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();

  strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  validationErrors: string[] | undefined;


  constructor(private toast: ToastrService, private authService: AuthService, private fb: FormBuilder, private router: Router) { }

  //registerForm: FormGroup = new FormGroup({});
  // per istanziare un formGroup si può fare così e poi richiamare un metodo nell'onInit che inizializzi il form
  // oppure si può direttamente istanziare ed inizializzare il form all'interno delle variabili come in questo caso
  registerForm: FormGroup = this.fb.group({
    username: [null, Validators.compose([Validators.required,Validators.minLength(5)])],
    city: [null, Validators.compose([Validators.required,Validators.minLength(5)])],
    dateOfBirth: [null, Validators.compose([Validators.required,Validators.minLength(5)])],
    country: [null, Validators.compose([Validators.required,Validators.minLength(5)])],
    password: [null, Validators.compose([Validators.required,Validators.pattern(this.strongRegex)])],
    confirmPassword: [null, Validators.compose([Validators.required,Validators.pattern(this.strongRegex)])],
    email: [null, Validators.compose([Validators.required,Validators.email])],
  }, { validators: passwordMatchingValidator });

  ngOnInit(): void {
  }

  // initializeForm() {
  //   this.registerForm = new FormGroup({
  //     username: new FormControl(null, Validators.compose([Validators.required,Validators.minLength(5)])),
  //     password: new FormControl(null, Validators.compose([Validators.required,Validators.pattern(this.strongRegex)])),
  //     confirmPassword: new FormControl(null, Validators.compose([Validators.required,Validators.pattern(this.strongRegex)])),
  //     email: new FormControl(null, Validators.compose([Validators.required,Validators.email])),
  //   })
  // }

  public register() {
    const userReg: UserRegister = this.registerForm.value;
    this.authService.register(userReg).subscribe({
      next: response => {
        console.log(response); // debug
        this.router.navigateByUrl("myprofile");
      },
      error: err => {
        console.log(err);
        this.validationErrors = err;
      }
    })
  }
  // error: string | null;


  public cancel() {
    console.log("canceled"); // debug
    this.cancelRegister.emit(false);
  }
}

// control if password matching
export const passwordMatchingValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password?.value === confirmPassword?.value ? null : { notmatched: true };
};
