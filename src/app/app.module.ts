import {  HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { TableModule } from './table/table.module';
import { ToolsModule } from './tools/tools.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ToolsModule,
    TableModule,
    HttpClientModule
    
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
