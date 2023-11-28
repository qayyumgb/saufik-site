import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaufikServiceRoutingModule } from './saufik-service-routing.module';
import { SoftwareDevComponent } from './software-dev/software-dev.component';


@NgModule({
  declarations: [
    SoftwareDevComponent,

  ],
  imports: [
    CommonModule,
    SaufikServiceRoutingModule
  ]
})
export class SaufikServiceModule { }
