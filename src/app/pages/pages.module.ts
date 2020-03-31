import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';

import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.router';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent
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