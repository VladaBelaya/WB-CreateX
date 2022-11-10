import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-signUp',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public toggleVisible: boolean = true
  constructor() { }

  ngOnInit(): void {
  }

  toggleVisiblePassword($event: any) {
    $event.preventDefault()
    this.toggleVisible = !this.toggleVisible
  }
}
