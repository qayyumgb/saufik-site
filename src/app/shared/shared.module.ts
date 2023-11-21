import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';





@NgModule({
  declarations: [
    MenuBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports:[
    MenuBarComponent,
    FooterComponent,
    CarouselModule,
    CommonModule
  ]
})
export class SharedModule { }
