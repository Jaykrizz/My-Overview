import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skills-tab',
  standalone: false,
  templateUrl: './skills-tab.component.html',
  styleUrls: ['./skills-tab.component.css']
})
export class SkillsTabComponent implements AfterViewInit {

  viewPortValue: number = 0;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    const skillsSection = this.el.nativeElement.querySelector('.skills-panel');

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
    observer.observe(skillsSection);
  }
}
