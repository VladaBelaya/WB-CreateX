import {Component, Input} from '@angular/core';
import {SocialNetworkName} from "../social-networks/social-icon/social-icon.component";

@Component({
  selector: 'app-signUp',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  public toggleVisible: boolean = true
  @Input() icons!: SocialNetworkName[]
  toggleVisiblePassword($event: any) {
    $event.preventDefault()
    this.toggleVisible = !this.toggleVisible
  }
}
