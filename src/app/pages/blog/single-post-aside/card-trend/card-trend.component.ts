import {Component} from '@angular/core';

@Component({
  selector: 'app-card-trend',
  templateUrl: './card-trend.component.html',
  styleUrls: ['./card-trend.component.scss']
})
export class CardTrendComponent {
  public cards = [
    {
      title: 'What is traffic arbitrage and does it really make money?',
      date: 'August 4, 2022',
      src: 'assets/img/trend1.jpg',
      link: ''
    },
    {
      title: 'What is traffic arbitrage and does it really make money?',
      date: 'August 5, 2022',
      src: 'assets/img/trend2.jpg',
      link: '',
    },
    {
      title: 'What is traffic arbitrage and does it really make money?',
      date: 'June 3, 2022',
      src: 'assets/img/trend3.jpg',
      link: ''
    }
  ]

}
