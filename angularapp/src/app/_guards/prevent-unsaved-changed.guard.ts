import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ProfileComponent } from '../components/profile/profile.component';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangedGuard implements CanDeactivate<ProfileComponent> {
  canDeactivate(component: ProfileComponent): boolean {
    if (component.editForm.dirty) {
      return confirm("Are you sure you want continue?");
    }
    return true;
  }

}
