import { Component, OnInit } from '@angular/core';

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
              color: #ffffff;">
        GENERATE CHART
      </button>
    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
