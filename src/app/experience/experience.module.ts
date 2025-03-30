import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { TimelineModule } from 'primeng/timeline';



@NgModule({
  declarations: [ExperienceComponent],
  imports: [
    CommonModule,
    TimelineModule
  ],
  exports: [ExperienceComponent]
})
export class ExperienceModule { }
