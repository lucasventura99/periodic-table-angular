import { ToolsComponent } from './tools/tools/tools.component';
import { ListComponent } from './table/list/list.component';
import { PeriodicTableComponent } from './table/periodic-table/periodic-table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo:'/table', pathMatch:'full'},
  {path: 'table', component:PeriodicTableComponent},
  {path: 'list', component:ListComponent},
  {path: 'tools', component:ToolsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
