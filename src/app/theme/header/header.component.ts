import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar>
      <img src="./../../../assets/logo.jpg" width="80px"  style="margin-right: 20px;">
      <h3>Raul Alves de Oliveira's Challenge</h3>
    </mat-toolbar>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
