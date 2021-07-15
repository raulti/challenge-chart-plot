import { Component, OnInit } from '@angular/core';

import { DataService } from './data/data.service';
import { ChartModel } from './model/chart.model';

@Component({
  selector: 'app-chart',
  template: `
    <app-data></app-data>
    <div class="margin-data"></div>
    <app-plotting id="plotting" [dataInput]="chart"></app-plotting>
  `,
  styles: ['.margin-data: {margin-bottom: 80px}']
})
export class ChartComponent implements OnInit {

  chart!: ChartModel;

  constructor(private _dataService: DataService) {
    this._dataService.chart$.subscribe(chartData => {
      this.chart = chartData;
    });
  }

  ngOnInit() {
  }

}
