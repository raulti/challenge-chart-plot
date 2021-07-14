import { Component } from '@angular/core';

@Component({
  selector: 'app-plotting',
  templateUrl: './plotting.component.html'
})
export class PlottingComponent {
  multi: any[];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    this.multi = [
      {
        "name": "Germany",
        "series": [
          {
            "name": "1990",
            "value": 62000000
          },
          {
            "name": "2010",
            "value": 73000000
          },
          {
            "name": "2011",
            "value": 89400000
          }
        ]
      }
    ];
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
