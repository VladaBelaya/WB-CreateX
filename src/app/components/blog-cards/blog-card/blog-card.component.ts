import {Component, Input} from '@angular/core';
import {BlogCard} from "../blog-cards.component";

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {
  @Input() public card!: BlogCard
}
