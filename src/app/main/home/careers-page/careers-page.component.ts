import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-careers-page',
  templateUrl: './careers-page.component.html',
  styleUrls: ['./careers-page.component.scss']
})
export class CareersPageComponent {
  constructor(private route_service: Router){

  }
  ngOnint(){

  }
 
  NavigateToJobDetail(){
    this.route_service.navigateByUrl('job-details');
  }
}
