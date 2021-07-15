import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChartModel, LineModel } from '../model/chart.model';

@Injectable()
export class DataService {

    charts$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    begin: number = 0;
    end: number = 0;

    get charts() {
        return this.charts$.value;
    }

    createNewChart() {
        this.charts$.next(new ChartModel());
    }

    addChartData(lineModel: LineModel) {
        this.charts.lines.push(lineModel);
    }

    setLimitTimestamp(begin: number, end: number) {
        this.begin = begin;
        this.end = end;
    }
}
