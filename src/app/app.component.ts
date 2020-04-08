import { Page2Component } from './page2/page2.component';
import { FooterComponent } from './footer/footer.component';
import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SimpleAngularApp';

  @ViewChild('footer', { static: true })
  FooterComponent: FooterComponent;

  @ViewChild('page2', { static: true })
  Page2Component: Page2Component;

  startTime: string;

  currentPage = 1;

  updateLastAccess() {
    console.log('The previous last accessed value was ' + this.FooterComponent.lastAccessed);
    this.FooterComponent.lastAccessed = new Date().toString();
  }

  ngOnInit(): void {
    this.startTime = new Date().toString();
  }

  incrementHitCounter(page) {
    this.currentPage = page;
    if (page === 2) {
      this.Page2Component.incrementHitCounter();
    }
  }

}
