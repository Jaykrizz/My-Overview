import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-overview',
  standalone: false,
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent implements AfterViewInit {

  viewPortValue: number = 0;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    const skillsSection = this.el.nativeElement.querySelector('.container');

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
