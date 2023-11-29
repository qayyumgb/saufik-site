import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
}
