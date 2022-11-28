import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, shareReplay, tap } from 'rxjs';

export enum ChartFilters {
  ORDER = 'qty_orders',
  NEW = 'qty_new',
  DELIVERED = 'qty_delivered',
  RETURN = 'qty_return',
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
  [id: string]: ResponseDataCharts[];
}

export interface ChartDatasets {
  data: number[];
  label: string;
  borderColor?: string;
  backgroundColor?: string;
  tension?: number;
}

interface Data {
  [date: number]: ResponseDataCharts[];
}

export interface ChartConfig {
  id: number | string;
  datasets: ChartDatasets[];
  labels: string[];
  name: string;
}

export interface ChartMainConfig {
  datasets: ChartDatasets[];
  labels: string[];
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class ChartsService {
  public initialData: ResponseDataCharts[] = [];
  public charts$: Observable<[ChartConfig, ChartMainConfig]>;
  public lineChartLegend: boolean = true;
  public shareData$ = this.http
    .get<ResponseDataCharts[]>('assets/data.json')
    .pipe(
      tap((result: ResponseDataCharts[]) => {
        this.initialData.push(...result);
      }),
      shareReplay(1)
    );

  constructor(private readonly http: HttpClient) {
    this.charts$ = this.shareData$.pipe(
      map(
        (response) =>
          [
            ...this.groupById(
              this.groupByKey(
                response,
                (response: ResponseDataCharts) => response.src_office_id
              )
            ),
            this.createMainCharts(
              this.groupByKey(
                response,
                (response: ResponseDataCharts) => response.dt_date
              )
            ),
          ] as [ChartConfig, ChartMainConfig]
      )
    );
  }

  private setLabel(label: ChartFilters): string {
    switch (label) {
      case ChartFilters.ORDER:
        return 'Заказы';
      case ChartFilters.DELIVERED:
        return 'Доставлено';
      case ChartFilters.RETURN:
        return 'Возвраты';
      case ChartFilters.NEW:
        return 'Новые';
      default:
        return '';
    }
  }

  createMainCharts(data: Data): ChartMainConfig {
    const keys: ChartFilters[] = Object.values(ChartFilters);
    const allDates: string[] = Object.keys(data);
    const daysWithSorted: Array<ResponseDataCharts[]> = Object.values(data);
    const mainChartsData = keys.map((key: ChartFilters) => ({
      label: this.setLabel(key),
      data: daysWithSorted.map((day: ResponseDataCharts[]) =>
        day.reduce(
          (accumulator: number, current: ResponseDataCharts) =>
            accumulator + current[key],
          0
        )
      ),
    }));
    return {
      datasets: mainChartsData,
      labels: allDates,
      name: 'Общий график по всем складам',
    };
  }

  public groupById(data: DataArgumentId): ChartConfig[] {
    return Object.keys(data).map((id) =>
      data[id].reduce(
        (accumulator, current) => {
          accumulator.id = current.src_office_id;
          accumulator.datasets[0].data.push(current.qty_orders);
          accumulator.datasets[1].data.push(current.qty_new);
          accumulator.datasets[2].data.push(current.qty_delivered);
          accumulator.datasets[3].data.push(current.qty_return);
          accumulator.labels.push(current.dt_date);
          accumulator.name = current.office_name;
          return { ...accumulator };
        },
        {
          id,
          datasets: [
            {
              data: [],
              label: 'Заказы',
              tension: 0.5,
            },
            {
              data: [],
              label: 'Новые',
              tension: 0.5,
            },
            {
              data: [],
              label: 'Доставлено',
              tension: 0.5,
            },
            {
              data: [],
              label: 'Возвраты',
              tension: 0.5,
            },
          ],
          labels: [],
          name: '',
        } as ChartConfig
      )
    );
  }

  public groupByKey = <T, K extends keyof any>(
    list: T[],
    getKey: (item: T) => K
  ) =>
    list.reduce((previous, currentItem) => {
      const group = getKey(currentItem);
      if (!previous[group]) previous[group] = [];
      previous[group].push(currentItem);
      return previous;
    }, {} as Record<K, T[]>);
}
