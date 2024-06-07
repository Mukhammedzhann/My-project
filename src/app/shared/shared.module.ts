import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { SvgComponent } from './svg/svg.component';
import { TopChartComponent } from './top-chart/top-chart.component';
@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, SvgComponent, TopChartComponent],
  exports: [ButtonComponent, SvgComponent, TopChartComponent],
})
export class SharedModule {}
