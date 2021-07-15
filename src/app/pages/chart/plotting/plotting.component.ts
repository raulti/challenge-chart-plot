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
      this.data = [...chartModel.lines]
    }
  }

  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = false;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
  }

}
