import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { HeaderBannerComponent } from './header-banner/header-banner.component';


@NgModule({
  declarations: [
    MenuBarComponent,
    FooterComponent,
    HeaderBannerComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule
  ],
  exports:[
    MenuBarComponent,
    FooterComponent,
    CarouselModule,
    HeaderBannerComponent,
    CommonModule,

  ]
})
export class SharedModule { }
