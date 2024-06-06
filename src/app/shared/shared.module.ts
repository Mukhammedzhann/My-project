import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { SvgComponent } from './svg/svg.component';
@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent,SvgComponent],
  exports: [ButtonComponent, SvgComponent],
})
export class SharedModule {}
