import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SaufikServicesComponent } from './saufik-services/saufik-services.component';
import { SaufikOffshoreStaffingComponent } from './saufik-offshore-staffing/saufik-offshore-staffing.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SaufikExpertiseComponent } from './saufik-expertise/saufik-expertise.component';


@NgModule({
  declarations: [
    HomePageComponent,
    SaufikServicesComponent,
    SaufikOffshoreStaffingComponent,
    ContactUsComponent,
    SaufikExpertiseComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    SaufikServicesComponent
  ]
})
export class HomeModule { }
