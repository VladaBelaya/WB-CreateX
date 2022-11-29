import {Component} from '@angular/core';
import {BlogCard} from "../../components/common/blog-cards/blog-cards.component";

interface Size {
  card__big: boolean;
  card__little: boolean;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent {

  public readonly cards: BlogCard[] = [
    {
      category: 'Marketing',
      type: 'Podcast',
      title: 'What is traffic arbitrage and does it really make money?',
      description:
        'Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida. Convallis proin dignissim lacus, purus gravida.',
      readTime: '36 min',
      date: 'September 4, 2020',
      src: 'assets/img/our-blog-1.png',
      btn: 'Listen'
    },
    {
      category: 'Development',
      type: 'Article',
      title: 'How to choose the first programming language for a beginner',
      description:
        'Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas dui. Gravida vitae aliquet enim egestas dui',
      date: 'September 1, 2020',
      src: 'assets/img/our-blog-2.png',
      btn: 'Read'
    },
    {
      category: 'Design',
      type: 'Video',
      title: 'Should you choose a creative profession if you are attracted to creativity?',
      description:
        'Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices.' +
        'Tortor, viverra sed vulputate ultrices',
      readTime: '40 min',
      date: 'August 8, 2020',
      src: 'assets/img/our-blog-3.png',
      btn: 'Watch'
    },
    {
      category: 'HR & Recruting',
      type: 'Article',
      title: 'Should you choose a creative profession if you are attracted to creativity?',
      description:
        'Massa, lectus nibh consectetur aliquet nunc risus aenean. Leo hac netus bibendum diam adipiscing aenean nisl.' +
        ' Molestie nullam ante mattis ac sit vitae pellentesque mi etiam. Morbi commodo tempor, massa vivamus.' +
        ' A molestie id semper fermentum pretium...',
      date: 'August 3, 2020',
      src: 'assets/img/our-blog-4.jpg',
      btn: 'Read'
    },
    {
      category: 'Management',
      type: 'Video',
      title: 'What to do and who to talk to if you want to get feedback on the product',
      description:
        'Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus. ' +
        'Curabitur nisl tincidunt eros venenatis.',
      readTime: '45 min',
      date: 'August 2, 2020',
      src: 'assets/img/our-blog-5.png',
      btn: 'Watch'
    },
    {
      category: 'Design',
      type: 'Podcast',
      title: 'What are color profiles and how they work in graphic design',
      description:
        'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
      readTime: '36 min',
      date: 'July 28, 2020',
      src: 'assets/img/our-blog-6.png',
      btn: 'Listen'
    },
    {
      category: 'Management',
      type: 'Video',
      title: 'Startup: how to build a team that will live longer than a year',
      description:
        'Nisi, massa ut sit faucibus et diam. Faucibus at malesuada at justo scelerisque in nisi, urna.',
      readTime: '45 min',
      date: 'July 15, 2020',
      src: 'assets/img/our-blog-7.png',
      btn: 'Watch'
    },
    {
      category: 'Marketing',
      type: 'Article',
      title: 'How to get customers to love your business from the start',
      description:
        'Malesuada in augue mi feugiat morbi a aliquet enim. Elementum lacus, pellentesque etiam arcu tristique ac. ' +
        'Pellentesque etiam arcu tristique ac',
      readTime: '40 min',
      date: 'July 9, 2020',
      src: 'assets/img/our-blog-8.jpg',
      btn: 'Read'
    },
  ];

  public setSize(elemPos: number): Size {
    return ({
      card__big: elemPos === 3,
      card__little: elemPos === 4
    })
  }
}
