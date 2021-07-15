import { Component, Input, OnInit } from '@angular/core';
import { EventDataModel, EventModel, EventSpantModel, EventStartModel } from '../model/event.model';
import * as JSON5 from 'json5'
import { DataService } from './data.service';
import { ChartModel, LineModel, SerieModel } from '../model/chart.model';
import { DataModel } from '../model/data.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  editorOptions = { theme: 'vs-dark', language: 'sql' };
  json: String;
  list: String[] = [];

  constructor(private _dataService: DataService) {
    this.json = new DataModel().sampleEvents;
  }

  ngOnInit() {
  }

  teste() {
    this.list = this.json.split('\n');
    this.list.forEach(element => {
      this.processEventByType(JSON5.parse(element.toString()));
    });
  }

  // makeLabelName(seriesID) {
  //   return seriesID.replace(/_/g, ' ')
  //     .split(" ")
  //     .map(a => a[0].toUpperCase() + a.substr(1))
  //     .join(" ");
  // }

  processEventByType(event: EventModel) {
    switch (event.type) {
      case 'start':
        this.startChart(new EventStartModel(event));
        break;

      case 'span':
        this.startChart(new EventSpantModel(event));
        break;

      case 'data':
        this.addData(event);
        break;

      case 'stop':
        break;
    }
  }

  startChart(seventStartModel: EventStartModel) {
    //valid start Chart
    this._dataService.createNewChart();
  }

  setLimitsTimestamp(eventSpantModel: EventSpantModel) {
    this._dataService.setLimitTimestamp(eventSpantModel.begin, eventSpantModel.end);
  }

  addData(eventDataModel: EventDataModel) {
    let serieModel: SerieModel = new SerieModel("Test", 0.2);
    let seriesModel: SerieModel[] = [];
    seriesModel.push(serieModel);

    let lineModel: LineModel = new LineModel("Test", seriesModel);
    let linesModel: LineModel[] = [];
    linesModel.push(lineModel);

    let chartModel = new ChartModel();
    this._dataService.createNewChart();
  }
}
