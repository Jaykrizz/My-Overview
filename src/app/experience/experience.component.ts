import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: false,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  experiences = [
    {
      role: 'QA Engineer',
      company: 'Pole To Win',
      duration: 'Jan 2022 - Jun 2022'
    },
    {
      role: 'QA Engineer',
      company: 'HopScotch Health',
      duration: 'Jan 2023 - Apr 2023'
    },
    {
      role: 'Java Full Stack Intern',
      company: 'VNC IT Sol',
      duration: 'May 2023 - Jan 2024'
    },
    {
      role: 'Software Engineer',
      company: 'Dynamatics Analytics Pvt. Ltd.',
      duration: 'Mar 2024 - Present'
    }
  ];
}
