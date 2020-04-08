import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    HeaderComponent,
    FooterComponent,
    Page2Component,
    Page3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: 'DataServiceInterface', useClass: DataService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
