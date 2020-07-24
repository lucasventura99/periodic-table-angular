import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodicTableComponent } from './periodic-table/periodic-table.component';
import { ListComponent } from './list/list.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';



@NgModule({
  declarations: [PeriodicTableComponent, ListComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot()
  ],
  exports: [
    PeriodicTableComponent,
    ListComponent
  ]
})
export class TableModule { }
