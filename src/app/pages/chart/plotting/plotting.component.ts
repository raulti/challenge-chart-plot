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
  view: [number, number] = [window.screen.height, 350];

  constructor() {
  }

  onResize(event: any) {
    this.view = [event.target.innerWidth, 400];
  }
}
