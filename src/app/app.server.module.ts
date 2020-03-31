// angular
import { NgModule, ViewEncapsulation, Component } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
    imports: [
      // AppModule - FIRST!!!
      AppModule,
      ServerModule,
      NoopAnimationsModule,
      ServerTransferStateModule,
  ],
    bootstrap: [AppComponent],
    providers: [
    ],
  })
  export class AppServerModule {}