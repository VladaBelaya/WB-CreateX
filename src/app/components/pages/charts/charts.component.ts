import {Component} from '@angular/core';
import {ChartConfig, ChartMainConfig, ChartsService} from "../../../services/charts/charts.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {
  public charts$: Observable<[ChartConfig, ChartMainConfig]> = this.chartsService.charts$

  constructor(private chartsService: ChartsService) {
  }
}
