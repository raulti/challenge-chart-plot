import { Component, Input, OnInit } from '@angular/core';

import * as JSON5 from 'json5'

import { DataService } from './data.service';
import { DataModel } from '../model/data.model';
import { LineModel, SerieModel } from '../model/chart.model';
import { EventDataModel, EventModel, EventSpantModel, EventStartModel, EventStopModel } from '../model/event.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  editorOptions = { theme: 'vs-dark', language: 'sql' };
  jsonString: String;

  constructor(private _dataService: DataService) {
    this.jsonString = new DataModel().sampleEvents;
  }

  ngOnInit() {
    this._dataService.init$.subscribe((value) => {
      if (value === true) {
        this.make();
      }
    });
  }

  make() {
    const events = this.jsonString.trim().split('\n');
    events.forEach(event => {
      const eventJson = JSON5.parse(event.toString());
      this.processEventByType(eventJson);
    });
  }

  processEventByType(event: EventModel) {

    if (!this.isEventCanBeProcessed(event)) {
      return;
    }

    switch (event.type) {
      case 'start':
        this.startChart(new EventStartModel(event));
        break;

      case 'span':
        this.setLimitTimestamp(new EventSpantModel(event));
        break;

      case 'data':
        this.addLine(new EventDataModel(event));
        break;

      case 'stop':
        this.stopEvents();
        break;
    }
  }

  isEventCanBeProcessed(event: EventModel): Boolean {
    return event.type == 'start' || event.type == 'span' ||
      (this.isTimestampLimitValid(event.timestamp) && this._dataService.getStarted());
  }

  isTimestampLimitValid(timestamp: number) {
    let beginTimestamp = this._dataService.getBeginTimestamp();
    let endTimestamp = this._dataService.getEndTimestamp();
    return timestamp >= beginTimestamp && timestamp <= endTimestamp;
  }

  stopEvents() {
    this._dataService.setStarted(false);
  }

  startChart(eventStartModel: EventStartModel) {
    this._dataService.setStarted(true);
    this._dataService.setEventStartModel(eventStartModel);
    this._dataService.createNewChartModel();
    this._dataService.setStarted(true);
  }

  setLimitTimestamp(eventSpantModel: EventSpantModel) {
    this._dataService.setLimitTimestamp(eventSpantModel.begin, eventSpantModel.end);
  }

  addLine(eventDataModel: EventDataModel) {

    const eventStart = this._dataService.getEventStartModel();

    eventStart.select.forEach(select => {
      let lineName = this.makeLineNameIdentifier(eventStart.group, eventDataModel.eventData, select.toString());
      let lineModel = this._dataService.getLineByNameIdentifier(lineName);
      let serieValue = eventDataModel.eventData[select.toString()];

      if (lineModel) {
        let serieName = lineModel.series.length + 1;
        const serieModel = new SerieModel(serieName, serieValue);
        lineModel.series.push(serieModel);
      } else {
        const serieModel = new SerieModel(1, serieValue);
        lineModel = new LineModel(lineName, [serieModel]);
      }

      this._dataService.addChartLine(lineModel);
    });
  }

  makeLineNameIdentifier(arrayGroup: String[], eventData: any, select: String) {
    let arrayNames: String[] = [];
    arrayGroup.forEach(group => {
      arrayNames.push(eventData[group.toString()]);
    });
    arrayNames.push(select);
    return arrayNames.join('_');
  }
}
