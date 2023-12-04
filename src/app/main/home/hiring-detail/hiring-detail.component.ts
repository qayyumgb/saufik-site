import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { JsonDataService } from 'src/app/services/json-data.service';

@Component({
  selector: 'app-hiring-detail',
  templateUrl: './hiring-detail.component.html',
  styleUrls: ['./hiring-detail.component.scss']
})
export class HiringDetailComponent {
  activeTab:string = "Front-End-Developer"
  allExpertList: any[] = []
  endExpert: any[] = []
  endTab: any[] = [
    {
      name: "Frontend Development",
      id: "Front-End-Developer"

    },
    {
      name: "UI/UX Design",
      id: "uiux-engineer"

    },
    {
      name: "Backend Development",
      id: "Back-End-Developer"

    },
    {
      name: "Mobile App Development",
      id: "Mob-app-Developer"

    },
    {
      name: "Quality Assurance",
      id: "SQA"

    },
    {
      name: "Full Stack Developer",
      id: "Full-stack-dev"

    },
    {
      name: "Devops Engineer",
      id: "Devops-engineeer"

    },
  ]
  customOptions: OwlOptions = {
    center: true,
    items:3,
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        },

    }
  }
  constructor(private jsonService: JsonDataService) {
    this.jsonService.GetAllExperties().subscribe(e => {
      this.allExpertList = e;
      this.getEndsExperts()
    })

  }
  hiringFaq: any = [
    {
      query: "Approaching talent pool",
      ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      query: "Cost savings",
      ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      query: "Maintain oversight",
      ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      query: "Reducing the time to market",
      ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
  ]
  faqTog: number = -1
  hiringFaqMehod(i: number) {
    this.faqTog == i ? this.faqTog = -1 :this.faqTog = i
  }

  getEndsExperts(endName: string = "Front-End-Developer") {
    this.activeTab = endName;
    this.endExpert = this.allExpertList.filter(x => x.workend == endName)

  }
}
