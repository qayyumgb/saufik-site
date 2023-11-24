import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  testtemonial:number[] =[1,2,3]
  customOptions: OwlOptions = {
    center: true,
    items:5,
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 6000,
    autoplaySpeed: 6000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        },
        1200:{
            items:5
        }
    }
  }
  heroCarousel: OwlOptions = {
    center: true,
    items:1,
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoplay: false,
    autoplayTimeout: 6000,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],

  }
  testimonialCarousel: OwlOptions = {
    center: true,
    items:1,
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoplay: false,
    autoplayTimeout: 6000,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],

  }
}
