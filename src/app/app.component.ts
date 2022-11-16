import { Component } from '@angular/core';
import {IconService} from "./services/icon/icon.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public toggleVisible: boolean = true

  constructor(private readonly iconService: IconService) {
  }

  toggleType(toggleVisible: boolean) {
    toggleVisible = !this.toggleVisible
  }
}
