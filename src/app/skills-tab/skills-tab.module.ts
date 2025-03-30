import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsTabComponent } from './skills-tab.component';



@NgModule({
  declarations: [SkillsTabComponent],
  imports: [
    CommonModule
  ],
  exports: [SkillsTabComponent]
})
export class SkillsTabModule { }
