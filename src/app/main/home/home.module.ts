import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SaufikServicesComponent } from './saufik-services/saufik-services.component';
import { SaufikOffshoreStaffingComponent } from './saufik-offshore-staffing/saufik-offshore-staffing.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SaufikExpertiseComponent } from './saufik-expertise/saufik-expertise.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CareersPageComponent } from './careers-page/careers-page.component';
import { SoftwareDevComponent } from './software-dev/software-dev.component';
import { JobDetailPageComponent } from './job-detail-page/job-detail-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    SaufikServicesComponent,
    SaufikOffshoreStaffingComponent,
    ContactUsComponent,
    SaufikExpertiseComponent,
    CareersPageComponent,
    SoftwareDevComponent,
    JobDetailPageComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
    
  ],
  exports: [
    SaufikServicesComponent
  ]
})
export class HomeModule { }
