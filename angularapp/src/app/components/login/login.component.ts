import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserLogin } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({
    username: new FormControl("", Validators.compose([Validators.required])),
    password: new FormControl("", Validators.compose([Validators.required])),
  });

  public login() {
    if(this.form.valid) {
      console.log(this.form); // debug
      let formValue = this.form.value;
      let user = new UserLogin(formValue.username, formValue.password);
      this.authService.login(user).subscribe({
        next: result => {
          console.log(result); // debug
          // this.router.navigateByUrl("dashboard");
          this.router.navigateByUrl("member-list");
        },
        error: err => {
          console.log(err);
        },
        complete: () => console.log("chiamata completata") // debug
      })
    }
  }
  // if (this.form.valid) {
  //   this.submitEM.emit(this.form.value);
  // }
  // error: string | null;

  // @Output() submitEM = new EventEmitter();

}
