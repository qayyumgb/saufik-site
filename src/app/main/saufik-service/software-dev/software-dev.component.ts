import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ServiceDto } from 'src/app/constant/models/serviceDto';
import { servicesData } from 'src/app/constant/static/servicesData';
import { JsonDataService } from 'src/app/services/json-data.service';

@Component({
  selector: 'app-software-dev',
  templateUrl: './software-dev.component.html',
  styleUrls: ['./software-dev.component.scss']
})
export class SoftwareDevComponent implements OnInit {
  techname: string | null = '';
  techEndData: ServiceDto | null = null
  paramList: string[] = ["web-developemnt", "mobile-app", "uiux", "QualityAssurance", "cloud-engineering", "digital-marketing"]
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private dataService:JsonDataService) {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.get('techName')) {
        this.techname = params.get('techName');
        this.paramList.some(x => x == this.techname)
          ? this.techEndData = servicesData.filter(x => x.id == this.techname)[0]
          : this.router.navigateByUrl("");

      }
    });
  }


  ngOnInit(): void {
    this.dataService.GetAllServiceJson().subscribe((item:any) => {
      console.log('services detail',item)
    })
  }

  faqId:number = 0
  toggleAccordient(getId: any) {
    this.faqId = getId
    
  }
  customOptions: OwlOptions = {
    center: true,
    items:6,
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
}
