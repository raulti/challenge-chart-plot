import { Component } from '@angular/core';

@Component({
  selector: 'app-plotting',
  templateUrl: './plotting.component.html'
})
export class PlottingComponent {
  data: any[];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = false;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = false;
  timeline: boolean = true;
  view: [number, number] = [window.screen.height, 350];

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    let dataInput =
      // { type: 'start', timestamp: 1519862400000, select: ['min_response_time', 'max_response_time'], group: ['os', 'browser'] }
      // { type: 'span', timestamp: 1519862400000, begin: 1519862400000, end: 1519862460000 }
      // { type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3 }
      // { type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'chrome', min_response_time: 0.2, max_response_time: 1.2 }
      // { type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.2 }
      // { type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'firefox', min_response_time: 0.1, max_response_time: 1.0 }
      // { type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'chrome', min_response_time: 0.2, max_response_time: 0.9 }
      // { type: 'data', timestamp: 1519862460000, os: 'mac', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.0 }
      // { type: 'data', timestamp: 1519862460000, os: 'mac', browser: 'firefox', min_response_time: 0.2, max_response_time: 1.1 }
      // { type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.4 }
      // { type: 'stop', timestamp: 1519862400000 }


      this.data =
      [
        {
          "name": "Mac Chrome Min Response Time",
          "series": [
            {
              "name": "0",
              "value": 0.2
            },
            {
              "name": "1",
              "value": 0.1
            }
          ]
        },
      ];
  }

  onResize(event: any) {
    this.view = [event.target.innerWidth, 400];
  }
}
