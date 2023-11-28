import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';
import { CareersComponent } from './careers.component';
import { CareersOpportunitiesComponent } from './careers-opportunities/careers-opportunities.component';
import { OpportunitiesDetailComponent } from './opportunities-detail/opportunities-detail.component';


@NgModule({
  declarations: [
    CareersComponent,
    CareersOpportunitiesComponent,
    OpportunitiesDetailComponent,

  ],
  imports: [
    CommonModule,
    CareersRoutingModule
  ]
})
export class CareersModule { }
