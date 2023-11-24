import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-saufik-expertise',
  templateUrl: './saufik-expertise.component.html',
  styleUrls: ['./saufik-expertise.component.scss']
})
export class SaufikExpertiseComponent implements OnInit {
  ngOnInit(): void {
    this.deviceIs()
  }

  isMobile:boolean = false;

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

  expertiesDetail=[
    {
      name:"Automation",
      icon:"Automationicon-01.svg"
    },
    {
      name:"Health Care",
      icon:"healthcareicon-02.svg"
    },
    {
      name:"Manufacturing",
      icon:"manufacturingicon-03.svg"
    },
    {
      icon:"realestateicon-04.svg ",
      name:"Real Estate"
    }
    ,
    {
      icon:"HRicon-05.svg",
      name:"Human Resource"
    }
    ,
    {
      icon:"educationicon-06.svg",
      name:"Education"
    }
    ,
    {
      icon:"devOpsicon-07.svg",
      name:"Devops"
    }
    ,
    {
      icon:"leadsicon-08.svg",
      name:"Lead Management"
    }
    ,
    {
      icon:"mediaadsicon-09.svg",
      name:"Media Ads"
    }
    ,
    {
      icon:"ecommerceicon-10.svg",
      name:"Ecommerce"
    }
  ]
  resizeMehod(){
  this.deviceIs()
  }
  deviceIs(){
    window.innerWidth < 768 ? this.isMobile = true:this.isMobile = false;
  }
}
