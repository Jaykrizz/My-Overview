import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';



@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule
  ],
  exports: [OverviewComponent]
})
export class OverviewModule { }
