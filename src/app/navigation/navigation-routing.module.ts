import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';


const routes: Routes = [
    {
        path: '',
        component: NavigationComponent,
        children: [
            {
                path: 'superadmin',
                loadChildren: () => import('./superadmin/superadmin.module').then(m => m.SuperadminModule)
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NavigationRoutingModule { }
