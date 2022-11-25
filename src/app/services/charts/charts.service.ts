import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, shareReplay, tap} from "rxjs";

export enum ChartFilters {
  ORDER = 'qty_orders',
  NEW = 'qty_new',
  DELIVERED = 'qty_delivered',
  RETURN = 'qty_return'
}

export interface ResponseDataCharts {
  src_office_id: number;
  office_name: string;
  dt_date: string;
  qty_orders: number;
  qty_new: number;
  qty_delivered: number;
  qty_return: number;
}

interface DataArgumentId {
  [id: number]: ResponseDataCharts[]
}

interface chartDatasets {
  data: number[],
  label: string,
  borderColor?: string,
  backgroundColor?: string,
  tension?: number
}

interface Data {
  [date: number]: ResponseDataCharts[]
}

export interface ChartConfig {
  id: number,
  datasets: chartDatasets[],
  labels: string[]
}

export interface ChartMainConfig {
  datasets: chartDatasets[],
  labels: string[]
}

@Injectable({
  providedIn: 'root'
})

export class ChartsService {
  public initialData: ResponseDataCharts[] = []
  public data$: Observable<ResponseDataCharts>
  public mainChart$: Observable<ChartMainConfig>
  public lineChartLegend: boolean = true;
  public shareData$ = this.http.get<ResponseDataCharts[]>('assets/data.json')
    .pipe(
      tap((result: ResponseDataCharts[]) => {
        this.initialData.push(...result)
      }),
      shareReplay(1)
    )

  constructor(private readonly http: HttpClient) {
    this.data$ = this.shareData$
      .pipe(
        map((response: ResponseDataCharts[]) => this.groupBy(response, (response: ResponseDataCharts) => response.src_office_id)),
        map((result) => this.groupById(result)),
      )

    this.mainChart$ = this.shareData$
      .pipe(
        map((response: ResponseDataCharts[]) => this.groupBy(response, (response: ResponseDataCharts) => response.dt_date)),
        map((result) => this.createMainCharts(result)),
      )
  }

  private setLabel(label: ChartFilters): string {
    switch (label) {
      case ChartFilters.ORDER:
        return 'Заказы'
      case ChartFilters.DELIVERED:
        return 'Доставлено'
      case ChartFilters.RETURN:
        return 'Возвраты'
      case ChartFilters.NEW:
        return 'Новые'
      default:
        return ''
    }
  }

  createMainCharts(data: Data): ChartMainConfig {
    const keys: ChartFilters[] = Object.values(ChartFilters)
    const allDates: string[] = Object.keys(data)
    const daysWithSorted: string[] = Object.values(data);
    const mainChartsData = keys.map((key: ChartFilters) => ({
        label: this.setLabel(key),
        data: daysWithSorted.map((day: any) =>
          day.reduce((accumulator: any, current: any) =>
            accumulator + (current[key]), 0))
      })
    )
    return {
      datasets: mainChartsData,
      labels: allDates
    }
  }

  public groupById<T>(data: DataArgumentId): any {
    return Object.keys(data).map((id: any) =>
      data[+id].reduce((accumulator: any, current: any) => {
        accumulator.id = current.src_office_id
        accumulator.datasets[0].data.push(current.qty_orders)
        accumulator.datasets[1].data.push(current.qty_new)
        accumulator.datasets[2].data.push(current.qty_delivered)
        accumulator.datasets[3].data.push(current.qty_return)
        accumulator.labels.push(current.dt_date)
        return {...accumulator}
      }, {
        id,
        datasets: [
          {
            data: [],
            label: 'Заказы',
            tension: 0.5
          },
          {
            data: [],
            label: 'Новые',
            tension: 0.5
          },
          {
            data: [],
            label: 'Доставлено',
            tension: 0.5
          },
          {
            data: [],
            label: 'Возвраты',
            tension: 0.5
          }
        ],
        labels: [],
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
