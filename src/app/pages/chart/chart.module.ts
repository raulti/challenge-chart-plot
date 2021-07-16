import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { DataService } from './data/data.service';
import { ChartComponent } from './chart.component';
import { DataComponent } from './data/data.component';
import { PlottingComponent } from './plotting/plotting.component';

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
    
  ]
})
export class ChartModule { }
