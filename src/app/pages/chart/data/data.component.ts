import { Component, Input, OnInit } from '@angular/core';
import { EventModel, EventStartModel } from '../model/event.model';
import * as JSON5 from 'json5'
import { DataService } from './data.service';
import { ChartModel, LineModel, SerieModel } from '../model/chart.model';

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
    this.json =
      "{ type: 'start', timestamp: 1519862400000, select: ['min_response_time', 'max_response_time'], group: ['os', 'browser'] }\n\
    { type: 'span', timestamp: 1519862400000, begin: 1519862400000, end: 1519862460000 }\n\
    { type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3 }\n\
    { type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'chrome', min_response_time: 0.2, max_response_time: 1.2 }\n\
    { type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.2 }\n\
    { type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'firefox', min_response_time: 0.1, max_response_time: 1.0 }\n\
    { type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'chrome', min_response_time: 0.2, max_response_time: 0.9 }\n\
    { type: 'data', timestamp: 1519862460000, os: 'mac', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.0 }\n\
    { type: 'data', timestamp: 1519862460000, os: 'mac', browser: 'firefox', min_response_time: 0.2, max_response_time: 1.1 }\n\
    { type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.4 }\n\
    { type: 'stop', timestamp: 1519862400000 }"
  }

  ngOnInit() {
  }

  teste() {
    this.list = this.json.split('\n');
    this.list.forEach(element => {
      this.getEventByType(JSON5.parse(element.toString()));
    });
  }

  // generateDatasetLabel(seriesID) {
  //   return seriesID.replace(/_/g, ' ')
  //     .split(" ")
  //     .map(a => a[0].toUpperCase() + a.substr(1))
  //     .join(" ");
  // }

  getEventByType(event: EventModel) {
    switch (event.type) {
      case 'start':

        this.startChart(new EventStartModel(event));
        break;


      case 'span':
        break;


      case 'data':
        break;


      case 'stop':
        break;
    }
  }

  startChart(eventStartModel: EventStartModel) {
    let serieModel: SerieModel = new SerieModel("0", 0.2);
    let seriesModel: SerieModel[] = [];
    seriesModel.push(serieModel);

    let lineModel: LineModel = new LineModel("Test", seriesModel);
    let linesModel: LineModel[] = [];
    linesModel.push(lineModel);

    let chartModel = new ChartModel();
    chartModel.chart = linesModel;
    this._dataService.addChartData(chartModel);
  }
}
