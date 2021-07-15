import { Component, Input, OnInit } from '@angular/core';
import { EventDataModel, EventModel, EventSpantModel, EventStartModel } from '../model/event.model';
import * as JSON5 from 'json5'
import { DataService } from './data.service';
import { LineModel, SerieModel } from '../model/chart.model';
import { DataModel } from '../model/data.model';

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
  }

  makeChart() {
    const events = this.jsonString.split('\n');
    events.forEach(event => {
      const eventJson = JSON5.parse(event.toString());
      this.processEventByType(eventJson);
    });
  }

  processEventByType(event: EventModel) {
    switch (event.type) {
      case 'start':
        this.startChart(new EventStartModel(event));
        break;

      case 'span':
        this.setLimitsTimestamp(new EventSpantModel(event));
        break;

      case 'data':
        this.addData(new EventDataModel(event));
        break;

      case 'stop':
        break;
    }
  }

  startChart(eventStartModel: EventStartModel) {
    this._dataService.setEventStartModel(eventStartModel);
    this._dataService.createNewChart();
  }

  setLimitsTimestamp(eventSpantModel: EventSpantModel) {
    this._dataService.setLimitTimestamp(eventSpantModel.begin, eventSpantModel.end);
  }

  addData(eventDataModel: EventDataModel) {

    const eventStart = this._dataService.getEventStartModel();
    // console.log(eventDataModel.eventData[eventStart.select[0].toString()])
    // console.log(eventDataModel.eventData[eventStart.group[0].toString()])

    let seriesModel: SerieModel[] = [];
    eventStart.select.forEach(select => {
      const serieModel = new SerieModel(1, eventDataModel.eventData[select.toString()]);


      let arrayNames: String[] = [];
      eventStart.group.forEach(group => {
        arrayNames.push(eventDataModel.eventData[group.toString()]);
      });
      arrayNames.push(select.toString());
      let key = arrayNames.join('_');


      
      let lines: LineModel[] = this._dataService.chart.lines;
      seriesModel.push(serieModel);



      let lineModel: LineModel = new LineModel(key, seriesModel);
      this._dataService.addChartData(lineModel);
    });





    //e.log(seriesModel);
    // let seriesModel: SerieModel[] = [];
    // const initialValue = new SerieModel(eventStart.select[0], eventDataModel.eventData[eventStart.select[0]]);
    // seriesModel.push(initialValue);

    // const finishValue = new SerieModel(eventStart.select[1], eventDataModel.min_response_time);
    // seriesModel.push(finishValue);

    // let lineModel: LineModel = new LineModel(eventDataModel.os + " " + eventDataModel.group, seriesModel);
    // this._dataService.addChartData(lineModel);
  }
}
