import {Component, Input, OnInit} from '@angular/core';
import {ChartMainConfig, ChartsService} from "../../services/charts/charts.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  public data$:Observable<any> = this.chartsService.data$
  public mainChart$:Observable<ChartMainConfig> = this.chartsService.mainChart$
  @Input() legend:boolean = this.chartsService.lineChartLegend
  constructor(private chartsService: ChartsService) { }

  ngOnInit(): void {
  }

}
