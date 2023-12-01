import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { SaufikAccomplishmentsComponent } from './saufik-accomplishments/saufik-accomplishments.component';
import { SaufikLeadershipComponent } from './saufik-leadership/saufik-leadership.component';
import { GlobalPresenceComponent } from './global-presence/global-presence.component';


@NgModule({
  declarations: [
    SaufikAccomplishmentsComponent,
    SaufikLeadershipComponent,
    GlobalPresenceComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
