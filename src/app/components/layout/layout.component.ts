import {Component, Input} from '@angular/core';
import {SocialNetworkName} from "../social-networks/social-icon/social-icon.component";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  @Input() icons!: SocialNetworkName[]

}
