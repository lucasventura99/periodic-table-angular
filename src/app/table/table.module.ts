import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodicTableComponent } from './periodic-table/periodic-table.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [PeriodicTableComponent, ListComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  exports: [
    PeriodicTableComponent,
    ListComponent
  ]
})
export class TableModule { }
