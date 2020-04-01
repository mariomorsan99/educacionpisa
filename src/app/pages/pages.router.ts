import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { JapanComponent } from './japan/japan.component';
import { ChinaComponent } from './china/china.component';
import { CanadaComponent } from './canada/canada.component';
import { FinlandiaComponent } from './finlandia/finlandia.component';

const pagesRoutes: Routes = [
    {
        path: '', 
        component: PagesComponent,
        children: [ 
          {path: 'dashboard', component: DashboardComponent , data: {titulo: 'Dashboard'}},
          {path: 'japan', component: JapanComponent , data: {titulo: 'JAPON'}},
          {path: 'china', component: ChinaComponent , data: {titulo: 'China'}},
          {path: 'canada', component: CanadaComponent , data: {titulo: 'Canada'}},
          {path: 'finlandia', component: FinlandiaComponent , data: {titulo: 'Finlandia'}},
          {path: '', redirectTo: '/dashboard', pathMatch: 'full'}, 
        ]
      }
];

export const PAGES_ROUTES= RouterModule.forChild( pagesRoutes);