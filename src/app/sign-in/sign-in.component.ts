import {Component, Input} from '@angular/core';
import {SocialNetworkName} from "../social-networks/social-icon/social-icon.component";

@Component({
  selector: 'app-signIn',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  public toggleVisible: boolean = true
  @Input() icons!: SocialNetworkName[]

  toggleVisiblePassword($event: any) {
    $event.preventDefault()
    this.toggleVisible = !this.toggleVisible
  }
}
