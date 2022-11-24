import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {cc} from "chart.js/dist/chunks/helpers.core";

export interface ResponseDataCharts {
  src_office_id: number;
  office_name: string;
  dt_date: string;
  qty_orders: number;
  qty_new: number;
  qty_delivered: number;
  qty_return: number;
}

interface chartDatasets {
  data: number[],
  label: string,
  borderColor?: string,
  backgroundColor?: string,
  tension?: number
}

export interface ChartConfig {
  id: number,
  datasets: chartDatasets[],
  label: string[]
}


@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  public data$: Observable<ResponseDataCharts>
  public lineChartLegend: boolean = true;

  constructor(private readonly http: HttpClient) {
    this.data$ = this.http.get<ResponseDataCharts[]>('../assets/data.json')
      .pipe(
        map((response: ResponseDataCharts[]) => this.groupBy(response, (response: ResponseDataCharts) => response.src_office_id)),
        map((result) => this.groupById(result)),
        tap((result: ResponseDataCharts) => console.log(result))
      )
  }

  public groupById<T>(data: any): any {
    return Object.keys(data).map((id: string) =>
      data[id].reduce((accumulator: any, current: any) => {
        accumulator.id = current.src_office_id
        accumulator.datasets[0].data.push(current.qty_orders)
        accumulator.datasets[1].data.push(current.qty_new)
        accumulator.datasets[2].data.push(current.qty_delivered)
        accumulator.datasets[3].data.push(current.qty_return)
        accumulator.label.push(current.dt_date)
        console.log(accumulator)
        return accumulator
      }, {
        id,
        datasets: [
          {
            data: [],
            label: 'Orders',
            tension: 0.5
          },
          {
            data: [],
            label: 'Delivery',
            tension: 0.5
          },
          {
            data: [],
            label: 'New',
            tension: 0.5
          },
          {
            data: [],
            label: 'Returned',
            tension: 0.5
          }
        ],
        label: [],
      })
    )
  }

  public groupBy = <T, K extends keyof any>(list: T[], getKey: (item: T) => K) =>
    list.reduce((previous, currentItem) => {
      const group = getKey(currentItem);
      if (!previous[group]) previous[group] = [];
      previous[group].push(currentItem);
      return previous;
    }, {} as Record<K, T[]>);
}



