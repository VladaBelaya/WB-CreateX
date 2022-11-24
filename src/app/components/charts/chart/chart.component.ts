import {Component, Input, OnInit} from '@angular/core';
import {ChartConfig} from "../../../services/charts/charts.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() chart!: ChartConfig
  constructor() { }

  ngOnInit(): void {
  }

}
