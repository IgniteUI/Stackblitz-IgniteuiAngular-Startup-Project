import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IgxBottomNavComponent } from 'igniteui-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild(IgxBottomNavComponent) bottomNav: IgxBottomNavComponent;

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    this.route.params.subscribe(param => {
      const navTab = this.bottomNav.tabs.find(tab => tab.relatedPanel.label.toLowerCase() === param.index.toLowerCase());
      if (navTab) {
        navTab.select();
      }
    });
  }
}
