import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreValuesComponent } from './more-values.component';



@NgModule({
  declarations: [MoreValuesComponent],
  imports: [
    CommonModule
  ],
  exports: [MoreValuesComponent]
})
export class MoreValuesModule { }
