import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-signIn',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public toggleVisible: boolean = true
  constructor() { }

  ngOnInit(): void {
  }

  toggleVisiblePassword($event: any) {
    $event.preventDefault()
    this.toggleVisible = !this.toggleVisible
  }
}
