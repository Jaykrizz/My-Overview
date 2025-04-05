import { AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: false,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements AfterViewChecked, AfterViewInit {

  @ViewChild('description') description: ElementRef | undefined;

  selectedExperience: any;
  viewPortDescription = false;

  experiences = [
    {
      role: 'QA Engineer',
      company: 'Pole To Win',
      duration: 'Jan 2022 - Jun 2022',
      description: `
        <ul>
          <li>Kickstarted my career as a QA Engineer, quickly mastering manual testing before diving into automation with Selenium and TestNG.</li>
          <li>Developed strong API testing skills with Postman, ensuring robust application performance and stability.</li>
          <li>Focused on continuous learning, enhancing my testing strategies to keep pace with industry tools and best practices.</li>
        </ul>`
    },
    {
      role: 'QA Engineer',
      company: 'HopScotch Health',
      duration: 'Jan 2023 - Apr 2023',
      description: `
        <ul>
          <li>Contributed to both manual and automated testing, optimizing processes with Selenium and TestNG to improve testing efficiency.</li>
          <li>Collaborated closely with developers to troubleshoot and resolve issues, delivering high-quality healthcare applications.</li>
          <li>Expanded my testing toolkit with Postman for API testing, broadening coverage and improving reliability.</li>
        </ul>`
    },
    {
      role: 'Java Full Stack Intern',
      company: 'VNC IT Sol',
      duration: 'May 2023 - Jan 2024',
      description: `
        <ul>
          <li>Gained hands-on experience in full-stack development, mastering Java, Spring, and Spring Boot while working on real-world projects.</li>
          <li>Collaborated with the team to deliver web applications, strengthening both my front-end and back-end development skills.</li>
          <li>Taught myself new technologies and techniques, constantly pushing to improve code quality and application performance.</li>
        </ul>`
    },
    {
      role: 'Software Engineer',
      company: 'Dynamatics Analytics Pvt. Ltd.',
      duration: 'Mar 2024 - Present',
      description: `
        <ul>
          <li>Worked on impactful projects like internal audits and risk management systems, honing my skills in Angular, Java, Node.js, and .NET.</li>
          <li>Optimized databases with MySQL, MongoDB, and Oracle to ensure scalable and high-performing systems.</li>
          <li>Leveraged AI tools and Large Language Models (LLMs) to enhance system efficiency, cutting down processing time and improving workflows.</li>
        </ul>`
    }
  ];

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

  showDescription(experience: any) {
    this.selectedExperience = this.selectedExperience === experience ? null : experience;
    this.viewPortDescription = this.selectedExperience ? true : false;
  }

  ngAfterViewChecked() {
    this.scrollToActiveTab();
  }
  private scrollToActiveTab() {
    if (this.viewPortDescription && this.description) {
      this.description.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      this.viewPortDescription = false;
    }
    this.viewPortDescription = false;
  }
}
