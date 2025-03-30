import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { MenuTabsModule } from '../menu-tabs/menu-tabs.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomePageComponent }
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    MenuTabsModule,
    RouterModule.forChild(routes)
],
  exports: [HomePageComponent]
})
export class HomePageModule { }
