import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-projects-data',
  standalone: false,
  templateUrl: './projects-data.component.html',
  styleUrl: './projects-data.component.scss'
})
export class ProjectsDataComponent {
  projects = [
    {
      title: "Internal Audit 360 Tool",
      description: "<p><strong>The 'Internal Audit 360 Tool'</strong> is an application designed to streamline and manage internal audit processes. It integrates with a Risk Management system to ensure seamless data flow between the two systems. This tool helps organizations effectively track, audit, and manage risk data, improving the overall efficiency and accuracy of audits.</p><p>It was developed using <strong>Angular</strong> for the front-end, allowing for a smooth and responsive user interface. The backend is powered by <strong>C# WebAPI</strong>, ensuring robust and secure API services. Additionally, <strong>Java</strong> was used for system integrations, while <strong>MySQL</strong> and <strong>Oracle</strong> databases store and manage audit and risk data securely.</p><p>This tool allows users to generate detailed audit reports, monitor risk factors, and manage audit data in real-time, all within an integrated environment. The integration with the Risk Management system ensures that risk data is always up to date and accessible, helping organizations make more informed decisions.</p>",
      image: "internal-audit-tool.jpg"
    },
    {
      title: "Enterprise Risk Management Solutions",
      description: "<p><strong>Enterprise Risk Management Solutions</strong> is a software designed to help businesses manage and monitor various risks across different departments. The platform includes modules for <strong>Risk</strong>, <strong>Control</strong>, <strong>KRI</strong> (Key Risk Indicators), <strong>Incident management</strong>, and <strong>Documents</strong>.</p><p>It was developed using <strong>Angular</strong> for the user interface, <strong>Java</strong> for API integrations, and <strong>C# WebAPI</strong> for backend services. The system is powered by <strong>MySQL</strong> and <strong>Oracle</strong> databases to store and manage risk-related data securely.</p><p>This solution helps businesses identify, assess, and mitigate risks more effectively, ensuring better decision-making and compliance.</p>",
      image: "risk-management-solutions.jpg"
    },
    {
      title: "SaaS for Internal Audit",
      description: "<p><strong>SaaS for Internal Audit</strong> is a cloud-based solution designed for RiskHawk to streamline internal audit processes. It provides scalable audit capabilities, allowing organizations to manage audits more efficiently and effectively.</p><p>The solution was developed using <strong>Angular</strong> for the front-end, <strong>Node.js</strong> for backend services, and <strong>MongoDB</strong> and <strong>MySQL</strong> for data storage. It also integrates with <strong>Oracle</strong> databases for secure data management and compliance.</p><p>This platform helps businesses manage audits remotely, reduce operational costs, and improve auditing accuracy, all while ensuring real-time access to audit data and reports.</p>",
      image: "saas-internal-audit.jpg"
    },
    {
      title: "Internal Audit Reports",
      description: "<p><strong>Internal Audit Reports</strong> is a report management system designed to streamline the generation and management of internal audit reports. Developed using <strong>C# WebAPI</strong>, it allows users to create, store, and manage audit reports efficiently.</p><p>This system provides a user-friendly interface for report generation, enabling users to quickly access audit data, create custom reports, and ensure compliance with internal auditing standards.</p><p>With its robust backend and secure data handling, this solution helps businesses maintain accurate audit records and improve overall reporting efficiency.</p>",
      image: "audit-reports.jpg"
    },
    {
      title: "Email Services and Escalations Management",
      description: "<p><strong>Email Services and Escalations Management</strong> is a tool built to manage internal audit-related emails and escalations. Developed using <strong>C#</strong> and <strong>MySQL</strong>, it streamlines communication and enhances process management within the internal audit framework.</p><p>The system allows for the efficient tracking of emails and escalations, automating the process to ensure timely responses to critical audit-related matters. It improves the coordination and communication among stakeholders involved in the audit process.</p><p>By providing a clear overview of communications and escalations, this tool optimizes workflow and helps internal audit teams respond quickly to pressing issues.</p>",
      image: "email-escalation.jpg"
    },
    {
      title: "Flexy",
      description: "<p><strong>Flexy</strong> is a flexible form and approval workflow generator, designed to be used across a wide range of approval and data management tasks. Developed for <strong>Dynamatix</strong>, this tool enables users to create custom forms and automate approval workflows easily.</p><p>With its user-friendly interface, Flexy allows organizations to design forms and workflows tailored to their specific needs. It simplifies data collection and approval processes, ensuring smooth and efficient operations.</p>",
      image: "flexy-forms.jpg"
    }
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '600px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  viewPortValue: number = 0;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    const skillsSection = this.el.nativeElement.querySelector('.projects');

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
