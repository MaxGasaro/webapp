import { Component, HostListener, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { Member } from 'src/app/models/member';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  member: Member | undefined;
  user: User | null = null;

  @HostListener("window:beforeunload", ["$event"]) unloadNotification($event:any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  editForm: FormGroup = new FormGroup({
    introduction: new FormControl(""),
    lookingFor: new FormControl(""),
    interests: new FormControl(""),
    city: new FormControl(""),
    country: new FormControl(""),
  });

  constructor(private authSerivce: AuthService, private memberService: MembersService, private toastr: ToastrService) {
    this.authSerivce.currentUser$.pipe(take(1)).subscribe({
      next: user => this.user = user
    })
   }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    if (!this.user) return;
    this.memberService.getMember(this.user.username).subscribe({
      next: member => this.member = member
    })
  }

  updateMember() {
    console.log(this.member);
    this.memberService.updateMember(this.editForm.value).subscribe({
      next: _ => {
        this.toastr.success("Profile updated successfully");
        this.editForm.reset();
      }
    })
  }

}
