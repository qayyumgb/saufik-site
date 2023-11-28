import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SharedModule } from '../shared/shared.module';
import { CompanyComponent } from './company/company.component';
import { SaufikServiceComponent } from './saufik-service/saufik-service.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    CompanyComponent,
    SaufikServiceComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
