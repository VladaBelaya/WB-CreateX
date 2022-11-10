import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public toggleVisible: boolean = true

  toggleType(toggleVisible: boolean) {
    toggleVisible = !this.toggleVisible
  }
}
