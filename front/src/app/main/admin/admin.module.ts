import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { AdminComponent } from './admin.component';
import { MatToolbarModule, MatTableModule, MatButtonModule } from '@angular/material';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SupportListComponent } from './support-list/support-list.component';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [StatisticsComponent,
    EmployeeListComponent,
    SupportListComponent,
    AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule, ChartsModule, WavesModule,
  ]
})
export class AdminModule { }