import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import { ThreeStateSwitchComponent } from './three-state-switch/three-state-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreeStateSwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
