import {Component} from '@angular/core';
import {BlogCard} from "../blog-cards/blog-cards.component";

@Component({
  selector: 'app-our-blog',
  templateUrl: './our-blog.component.html',
  styleUrls: ['./our-blog.component.scss']
})
export class OurBlogComponent {
  public readonly cards: BlogCard[] = [
    {
      category: 'Design',
      type: 'Podcast',
      title: 'What are color profiles and how they work in graphic design',
      description: 'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend. Consectetur urna arcu eleifend.',
      readTime: '4 min',
      date: 'August 4, 2022',
      src: 'assets/img/our-blog-1.png',
      link: ''
    },
    {
      category: 'Development',
      type: 'Article',
      title: 'What are color profiles and how they work in graphic design',
      description: 'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend. Consectetur urna arcu eleifend.',
      readTime: '14 min',
      date: 'August 4, 2022',
      src: 'assets/img/our-blog-2.png',
      link: ''
    },
    {
      category: 'Design',
      type: 'Article',
      title: 'What are color profiles and how they work in graphic design',
      description: 'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend. Consectetur urna arcu eleifend.',
      readTime: '4 min',
      date: 'August 1, 2022',
      src: 'assets/img/our-blog-3.png',
      link: ''
    },
  ]

}
