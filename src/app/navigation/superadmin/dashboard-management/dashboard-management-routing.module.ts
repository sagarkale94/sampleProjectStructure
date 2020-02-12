import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigureNewDashboardComponent } from './configure-new-dashboard/configure-new-dashboard.component';


const routes: Routes = [
    {
        path: '',
        component: ConfigureNewDashboardComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardManagementRoutingModule { }
