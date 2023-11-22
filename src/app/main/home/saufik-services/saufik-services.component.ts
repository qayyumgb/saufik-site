import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-saufik-services',
  templateUrl: './saufik-services.component.html',
  styleUrls: ['./saufik-services.component.scss']
})
export class SaufikServicesComponent {

  constructor(private route_service: Router){

  }
  ngOnint(){

  }
 
  NavigateToSoftwareDev(){
    this.route_service.navigateByUrl('software-development-services');
  }
}
