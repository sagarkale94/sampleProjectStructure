import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuManagementRoutingModule } from './menu-management-routing.module';
import { MenuManagementComponent } from './menu-management.component';


@NgModule({
  declarations: [MenuManagementComponent],
  imports: [
    CommonModule,
    MenuManagementRoutingModule
  ]
})
export class MenuManagementModule { }
