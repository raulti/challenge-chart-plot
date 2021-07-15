import { Component, Input } from '@angular/core';
import { ChartModel } from '../model/chart.model';

@Component({
  selector: 'app-plotting',
  templateUrl: './plotting.component.html'
})
export class PlottingComponent {
  data!: any;

  @Input() set dataInput(chartModel: ChartModel) {
    if (chartModel instanceof ChartModel && chartModel.lines) {
      this.data = chartModel.lines
    }
  }

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
  }

  onResize(event: any) {
    this.view = [event.target.innerWidth, 400];
  }
}
