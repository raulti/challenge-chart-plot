import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChartModel } from '../model/chart.model';

@Injectable()
export class DataService {

    public chartData!: ChartModel;

    public charts$: BehaviorSubject<ChartModel> = new BehaviorSubject(new ChartModel());

    addChartData(chartModel: ChartModel) {
        this.charts$.next(chartModel);
    }

    getChartData() {
        return this.chartData;
    }

    setChartData() {
        return this.chartData;
    }
}
