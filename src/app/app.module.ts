import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { DefaultComponent } from './default/default.component';
import { VoidComponent } from './void/void.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    DefaultComponent,
    VoidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
