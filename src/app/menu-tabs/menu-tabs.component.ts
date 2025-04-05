import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-tabs',
  standalone: false,
  templateUrl: './menu-tabs.component.html',
  styleUrl: './menu-tabs.component.css'
})
export class MenuTabsComponent implements AfterViewChecked {
  activeTab = -1;
  viewPort = -1;

  @ViewChild('overviewTab') overviewTab: ElementRef | undefined;
  @ViewChild('skillsTab') skillsTab: ElementRef | undefined;
  @ViewChild('experienceTab') experienceTab: ElementRef | undefined;
  @ViewChild('projectsDataTab') projectsDataTab: ElementRef | undefined;
  @ViewChild('moreValuesTab') moreValuesTab: ElementRef | undefined;

  tabs = [
    { title: 'Overview', content: 'Content for Overview' },
    { title: 'Skills', content: 'Content for Skills' },
    { title: 'Experience', content: 'Content for Experience' },
    { title: 'Projects', content: 'Content for Projects' },
    { title: 'More', content: 'Content for More' }
  ];

  selectTab(index: number) {
    this.activeTab = index;
    this.viewPort = index;
  }

  ngAfterViewChecked() {
    this.scrollToActiveTab();
  }
  private scrollToActiveTab() {
    if (this.viewPort === 0 && this.overviewTab) {
      this.overviewTab.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else if (this.viewPort === 1 && this.skillsTab) {
      this.skillsTab.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else if (this.viewPort === 2 && this.experienceTab) {
      this.experienceTab.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    else if (this.viewPort === 3 && this.projectsDataTab) {
      this.projectsDataTab.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    else if (this.viewPort === 4 && this.moreValuesTab) {
      this.moreValuesTab.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    this.viewPort = -1;
  }
}
