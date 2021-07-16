import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import { EventStartModel } from '../model/event.model';
import { ChartModel, LineModel } from '../model/chart.model';

@Injectable()
export class DataService {
    chart$: BehaviorSubject<ChartModel> = new BehaviorSubject(new ChartModel());
    init$: BehaviorSubject<any> = new BehaviorSubject(Boolean);
    begin: number = 0;
    end: number = 0;
    eventStartModel!: EventStartModel;
    started: Boolean = false;

    get chart(): ChartModel {
        return this.chart$.value;
    }

    createNewChartModel() {
        let chartModel = new ChartModel();
        chartModel.lines = [];
        this.chart$.next(chartModel);
    }

    addChartLine(lineModel: LineModel) {
        this.chart.lines.push(lineModel);
        this.chart$.next(this.chart);
    }

    getLineByNameIdentifier(lineName: String) {
        let lines = this.chart.lines;
        let objIndex = lines.findIndex((line => line.name == lineName));

        let line;
        if (objIndex >= 0) {
            line = lines[objIndex];
        }
        return line;
    }

    setLimitTimestamp(begin: number, end: number) {
        this.begin = begin;
        this.end = end;
    }

    getBeginTimestamp(): number {
        return this.begin;
    }

    getEndTimestamp(): number {
        return this.end;
    }

    getEventStartModel(): EventStartModel {
        return this.eventStartModel;
    }

    setEventStartModel(eventStartModel: EventStartModel) {
        this.eventStartModel = eventStartModel;
    }

    getStarted(): Boolean {
        return this.started;
    }

    setStarted(started: Boolean) {
        this.started = started;
    }
}
