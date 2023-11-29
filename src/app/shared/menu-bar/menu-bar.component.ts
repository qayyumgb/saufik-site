import { Component } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {

  navItems:any[] = [
    {
      linkName:"Services",
      submenu:{
        heading:"Service",
        tagline:"Accelerate your software development process.",
        tabBtntext:"get a proposal",
        sublink:[
          {
            name:"Web Developemt",
            icon:"fa fa-laptop",
            text:"",
            link:"/service/web-developemnt"
          },
          {
            name:"Mobile App",
            icon:"fa fa-mobile",
            text:"",
            link:"/service/mobile-app"
          },

          {
            name:"UIUX",
            icon:"fa fa-swatchbook",
            text:"",
            link:"/service/uiux"
          },

          {
            name:"Quality Assurance",
            icon:"fa fa-scale-balanced",
            text:"",
            link:"/service/QualityAssurance"
          },
          {
            name:"Cloud Engineering & DevOps",
            icon:"fa fa-cloud",
            text:"",
            link:"/service/cloud-engineering"
          },
          {
            name:"Digital Marketing",
            icon:"fa  fa-money-bill-trend-up",
            text:"",
            link:"/service/digital-marketing"
          },

        ]


      }
    },
    {
      linkName:"Company",
      submenu:{
        heading:"Company",
        tagline:"Learn more about <span class='text-primary'>Saufik. </span>",
        tabBtntext:"get a proposal",
        sublink:[
          {
            name:"Who We Are",
            icon:"fa fa-building",
            text:"",
            link:"/careers/opportunities"
          },
          {
            name:"Our Accomplishments",
            icon:"fa fa-clipboard-list",
            text:"",
            link:"/careers/opportunities"
          },

          {
            name:"Our Leadership",
            icon:"fa fa-people-group",
            text:"",
            link:"/careers/opportunities"
          },

          {
            name:"Our Global Presence",
            icon:"fa fa-globe",
            text:"",
            link:"/careers/opportunities"
          },

        ]


      }
    },
    {
      linkName:"Insights",
      submenu:{
        heading:"Insights",
        tagline:"Engineering and tech leadership <span class='text-primary'>insights</span> from practitioners.",
        tabBtntext:"get notified",
        sublink:[
          {
            name:"Software Development Use Cases",
            icon:"fa fa-microchip",
            text:"",
            link:"/careers/opportunities"
          },
          {
            name:"Blog and Tech Guides",
            icon:"fa fa-blog",
            text:"",
            link:"/careers/opportunities"
          },

          {
            name:"Better Tech Leadership Podcast",
            icon:"fa fa-microphone",
            text:"",
            link:"/careers/opportunities"
          },

          {
            name:"3x3 Newsletter",
            icon:"fa fa-newspaper",
            text:"",
            link:"/careers/opportunities"
          },

        ]


      }
    },
    {
      linkName:"Careers",
      submenu:{
        heading:"Careers",
        tagline:"Learn more about Saufik.",
        tabBtntext:"get a proposal",
        sublink:[
          {
            name:"Career Opportunities",
            icon:"fa fa-building",
            text:"",
            link:"/careers"
          },
          {
            name:"Life At Saufik",
            icon:"fa fa-clipboard-list",
            text:"",
            link:"/careers"
          },


        ]


      }
    }
  ]
  constructor(){

  }

  ngOnint(){

  }

  househover:boolean = false;
  submenumousehover(a:boolean){
    this.househover = a;
  }

}
