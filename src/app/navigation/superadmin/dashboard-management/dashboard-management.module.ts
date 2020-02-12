import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardManagementRoutingModule } from './dashboard-management-routing.module';
import { DashboardManagementComponent } from './dashboard-management.component';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { AddNewDashboardComponent } from './dashboard-list/add-new-dashboard/add-new-dashboard.component';
import { ConfigureNewDashboardComponent } from './configure-new-dashboard/configure-new-dashboard.component';
import { EditDashboardConfigurationComponent } from './edit-dashboard-configuration/edit-dashboard-configuration.component';


@NgModule({
  declarations: [DashboardManagementComponent, DashboardListComponent, AddNewDashboardComponent, ConfigureNewDashboardComponent, EditDashboardConfigurationComponent],
  imports: [
    CommonModule,
    DashboardManagementRoutingModule
  ]
})
export class DashboardManagementModule { }
