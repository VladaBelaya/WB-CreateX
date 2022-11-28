import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../../auth/sign-up/sign-up.component';
import { SignInComponent } from '../../auth/sign-in/sign-in.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(public dialog: MatDialog) {}

  openDialogSignIn() {
    this.dialog.open(SignInComponent, {
      disableClose: true,
    });
  }

  openDialogSignUp() {
    this.dialog.open(SignUpComponent, {
      disableClose: true,
    });
  }
}
