import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-more-values',
  standalone: false,
  templateUrl: './more-values.component.html',
  styleUrl: './more-values.component.scss'
})
export class MoreValuesComponent implements AfterViewInit {
  viewPortValue: number = 0;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    const skillsSection = this.el.nativeElement.querySelector('.more-page');

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
