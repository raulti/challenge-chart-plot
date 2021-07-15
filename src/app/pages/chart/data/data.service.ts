import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChartModel, LineModel } from '../model/chart.model';
import { EventStartModel } from '../model/event.model';

@Injectable()
export class DataService {

    chart$: BehaviorSubject<ChartModel> = new BehaviorSubject(new ChartModel());
    begin: number = 0;
    end: number = 0;
    eventStartModel!: EventStartModel;

    get chart(): ChartModel {
        return this.chart$.value;
    }

    createNewChart() {
        this.chart$.next(new ChartModel());
    }

    addChartData(lineModel: LineModel) {
        if (!this.chart.lines) {
            this.chart.lines = [];
        }
        console.log(lineModel)
        this.chart.lines.push(lineModel);
        this.chart$.next(this.chart);
    }

    setLimitTimestamp(begin: number, end: number) {
        this.begin = begin;
        this.end = end;
    }

    getEventStartModel(): EventStartModel {
        return this.eventStartModel;
    }

    setEventStartModel(eventStartModel: EventStartModel) {
        this.eventStartModel = eventStartModel;
    }
}
