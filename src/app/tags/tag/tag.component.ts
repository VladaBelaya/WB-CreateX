import {Component, Input} from '@angular/core';
import {Tag} from "../tags.component";

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {
  @Input() tag!: Tag
}
