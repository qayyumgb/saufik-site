import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-careers-opportunities',
  templateUrl: './careers-opportunities.component.html',
  styleUrls: ['./careers-opportunities.component.scss']
})
export class CareersOpportunitiesComponent {
  constructor(private route_service: Router){

  }
  ngOnint(){

  }

  NavigateToJobDetail(){
    this.route_service.navigateByUrl('job-details');
  }
}
