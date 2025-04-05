import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsDataComponent } from './projects-data.component';
import { CarouselModule } from 'primeng/carousel';



@NgModule({
  declarations: [ProjectsDataComponent],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [ProjectsDataComponent]
})
export class ProjectsDataModule { }
