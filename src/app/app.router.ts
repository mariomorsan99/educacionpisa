import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound/nopagefound.component';

const AppRoutes: Routes = [
     {path: 'login', component: LoginComponent},
     {path: '**', component: NopagefoundComponent }  
  ];


export const APP_ROUTES = RouterModule.forRoot(AppRoutes, {useHash: true });