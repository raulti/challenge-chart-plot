import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/pages/chart/data/data.service';


@Component({
  selector: 'app-footer',
  template: `
    <footer fxFlexOffset="auto" style="background-color: #dddee1">
      <button type="button" 
              style="padding: 10px;
              cursor: pointer;
              border-radius: 5px;
              border: 0px;
              margin: 10px 45px;
              background-color: #017eff;
              color: #ffffff;"
              (click)="buttonClicked()"
              >
        GENERATE CHART
      </button>
    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  buttonClicked() {
    this._dataService.init$.next(true);
  }
}
