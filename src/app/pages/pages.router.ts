import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

const pagesRoutes: Routes = [
    {
        path: '', 
        component: PagesComponent,
        children: [ 
          {path: 'dashboard', component: DashboardComponent , data: {titulo: 'Dashboard'}},
          {path: '', redirectTo: '/dashboard', pathMatch: 'full'}, 
        ]
      }
];

export const PAGES_ROUTES= RouterModule.forChild( pagesRoutes);