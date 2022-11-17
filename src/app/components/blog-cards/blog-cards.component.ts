import {Component, Input} from '@angular/core';

export type BlogCard = {
  category: string,
  type: string,
  title: string,
  description: string,
  readTime: string,
  date: string,
  src: string,
  link: string
}

@Component({
  selector: 'app-blog-cards',
  templateUrl: './blog-cards.component.html',
  styleUrls: ['./blog-cards.component.scss']
})
export class BlogCardsComponent {
  @Input() public cardsData: BlogCard[] = []
}
