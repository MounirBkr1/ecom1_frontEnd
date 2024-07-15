import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AllAngularMaterialModuls} from "./AllAngularMaterialModuls"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AllAngularMaterialModuls
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
