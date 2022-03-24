import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full',
        data: { title: 'Login' }
    },
    {
        path: 'dashboard',
        component: LayoutsComponent,
        children: [
            {
                path: '',
                component: DashboardComponent,
                data: { title: 'Dashboard' }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
