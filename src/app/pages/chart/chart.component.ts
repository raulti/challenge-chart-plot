import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  template: `
    <app-data></app-data>
    <div class="margin-data"></div>
    <app-plotting id="plotting"></app-plotting>
  `,
  styles: ['.margin-data: {margin-bottom: 80px}']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
