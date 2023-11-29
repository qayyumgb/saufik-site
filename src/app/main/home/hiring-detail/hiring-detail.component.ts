import { Component } from '@angular/core';

@Component({
  selector: 'app-hiring-detail',
  templateUrl: './hiring-detail.component.html',
  styleUrls: ['./hiring-detail.component.scss']
})
export class HiringDetailComponent {

  hiringFaq:any = [
    {
      query:"Approaching talent pool",
      ans:"01"
    },
    {
      query:"Cost savings",
      ans:"02"
    },
    {
      query:"Maintain oversight",
      ans:"03"
    },
    {
      query:"Reducing the time to market",
      ans:"04"
    },
  ]
  faqTog:number = 0
  hiringFaqMehod(i:number){
    this.faqTog = i
  }
}
