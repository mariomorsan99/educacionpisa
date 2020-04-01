import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';

import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.router';
import { BrowserModule } from '@angular/platform-browser';
import { JapanComponent } from './japan/japan.component';
import { ChinaComponent } from './china/china.component';
import { CanadaComponent } from './canada/canada.component';
import { FinlandiaComponent } from './finlandia/finlandia.component';




@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        JapanComponent,
        ChinaComponent,
        CanadaComponent,
        FinlandiaComponent
    ],
    exports: [
     PagesComponent,
     DashboardComponent,
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        BrowserModule
    ]
 })
 


export class PageModule { }