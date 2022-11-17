import {Component} from '@angular/core';
import {Tag} from "../../tags/tags.component";

@Component({
  selector: 'app-single-post-aside',
  templateUrl: './single-post-aside.component.html',
  styleUrls: ['./single-post-aside.component.scss']
})
export class SinglePostAsideComponent {
  public tags: Tag[] = [
    {title: 'marketing', link: 'marketing'},
    {title: 'recruiting', link: 'recruiting'},
    {title: 'coding', link: 'coding'},
    {title: 'learning', link: 'learning'},
    {title: 'HR', link: 'HR'},
    {title: 'self-development', link: 'self-development'},
  ]

}
