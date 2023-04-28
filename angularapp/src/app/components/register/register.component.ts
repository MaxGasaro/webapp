import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserRegister } from 'src/app/models/register';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @Input() usersFromHomepage: any;
  @Output() cancelRegister = new EventEmitter();

  strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  constructor(private toast: ToastrService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({
    username: new FormControl("", Validators.compose([Validators.required,Validators.minLength(5)])),
    password: new FormControl("", Validators.compose([Validators.required,Validators.pattern(this.strongRegex)])),
    confirmPassword: new FormControl("", Validators.compose([Validators.required,Validators.pattern(this.strongRegex)])),
    email: new FormControl("", Validators.compose([Validators.required,Validators.email])),
  }, { validators: passwordMatchingValidator });

  public register() {
    console.log(this.form); // debug
    if(this.form.valid) {
      const userReg: UserRegister = this.form.value;
      this.authService.register(userReg).subscribe({
        next: response => {
          console.log(response); // debug
          this.cancel();
        },
        error: err => console.log(err)
      })
    }
    // if (this.form.valid) {
    //   this.submitEM.emit(this.form.value);
    // }
  }
  // error: string | null;


  public cancel() {
    console.log("canceled"); // debug
    this.cancelRegister.emit(false);
  }
}

export const passwordMatchingValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password?.value === confirmPassword?.value ? null : { notmatched: true };
};
