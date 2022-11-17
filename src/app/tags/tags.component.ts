import {Component, Input} from '@angular/core';

export type Tag = { title: string; link: string }

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
  @Input() public tags: Tag[] = [
    {title: 'learning', link: 'learning'},
    {title: 'HR', link: 'HR'},
    {title: 'self-development', link: 'self-development'},
  ]

}
