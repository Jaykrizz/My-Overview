import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTabsComponent } from './menu-tabs.component';
import { SkillsTabModule } from '../skills-tab/skills-tab.module';
import { OverviewModule } from "../overview/overview.module";
import { ExperienceModule } from '../experience/experience.module';
import { ProjectsDataModule } from "../projects-data/projects-data.module";
import { MoreValuesModule } from "../more-values/more-values.module";



@NgModule({
  declarations: [MenuTabsComponent],
  imports: [
    CommonModule,
    SkillsTabModule,
    OverviewModule,
    ExperienceModule,
    ProjectsDataModule,
    MoreValuesModule
],
  exports: [MenuTabsComponent]
})
export class MenuTabsModule { }
