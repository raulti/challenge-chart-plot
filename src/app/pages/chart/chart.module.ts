import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data/data.component';
import { PlottingComponent } from './plotting/plotting.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart.component';

import { MatInputModule } from '@angular/material/input';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { FormsModule } from '@angular/forms';
import { DataService } from './data/data.service';

const routes: Routes = [
  {
    path: '',
    component: ChartComponent,
  }
];


@NgModule({
  declarations: [
    DataComponent,
    PlottingComponent,
    ChartComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    NgxChartsModule,
    MonacoEditorModule.forRoot(),
    FormsModule
  ],
  providers: [
    DataService
  ]
})
export class ChartModule { }
