import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data/data.component';
import { PlottingComponent } from './plotting/plotting.component';



@NgModule({
  declarations: [DataComponent, PlottingComponent],
  imports: [
    CommonModule
  ]
})
export class ChartModule { }
