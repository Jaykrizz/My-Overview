import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuTabsModule } from '../menu-tabs/menu-tabs.module';

@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements AfterViewInit {

  viewPortValue: number = 0;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    const welcomeSection = this.el.nativeElement.querySelector('.welcome');
    const skillsSection = this.el.nativeElement.querySelector('.menu-tabs');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(async entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          this.viewPortValue = 1;
        } else if (!entry.isIntersecting) {
          entry.target.classList.remove('in-view');
          this.viewPortValue = 0.1;
        }
      });
    }, {
      threshold: this.viewPortValue
    });

    observer.observe(welcomeSection);
    observer.observe(skillsSection);
  }
}