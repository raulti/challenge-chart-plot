import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  template : `
    <app-data></app-data>
    <app-plotting></app-plotting>
  `,
  styles: []
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
