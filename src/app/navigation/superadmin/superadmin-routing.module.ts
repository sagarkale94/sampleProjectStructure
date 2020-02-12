import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperadminComponent } from './superadmin.component';


const routes: Routes = [
    {
        path: '',
        component: SuperadminComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard-management'
            },
            {
                path: 'dashboard-management',
                loadChildren: () => import('./dashboard-management/dashboard-management.module').then(m => m.DashboardManagementModule)
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SuperadminRoutingModule { }
