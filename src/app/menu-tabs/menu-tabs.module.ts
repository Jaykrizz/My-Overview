import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTabsComponent } from './menu-tabs.component';
import { SkillsTabModule } from '../skills-tab/skills-tab.module';
import { OverviewModule } from "../overview/overview.module";
import { ExperienceModule } from '../experience/experience.module';



@NgModule({
  declarations: [MenuTabsComponent],
  imports: [
    CommonModule,
    SkillsTabModule,
    OverviewModule,
    ExperienceModule
  ],
  exports: [MenuTabsComponent]
})
export class MenuTabsModule { }
