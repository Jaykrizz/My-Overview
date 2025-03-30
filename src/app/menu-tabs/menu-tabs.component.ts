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

  tabs = [
    { title: 'Overview', content: 'Content for Overview' },
    { title: 'Skills', content: 'Content for Skills' },
    { title: 'Experience', content: 'Content for Experience' },
    { title: 'Projects', content: 'Content for Projects' },
    { title: 'About Me', content: 'Content for About Me' },
    { title: 'More', content: 'Content for More' }
  ];

  selectTab(index: number) {
    this.activeTab = index;
    this.viewPort = index;
    console.log(this.activeTab);
  }

  ngAfterViewChecked() {
    this.scrollToActiveTab();
    console.log("testing");
  }
  private scrollToActiveTab() {
    if (this.viewPort === 0 && this.overviewTab) {
      this.overviewTab.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      this.viewPort = -1;
    } else if (this.viewPort === 1 && this.skillsTab) {
      this.skillsTab.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    this.viewPort = -1;
  }
}
