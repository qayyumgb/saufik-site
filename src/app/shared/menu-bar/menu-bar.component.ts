import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {
  constructor(private route_service: Router){

  }
  ngOnint(){

  }
 
  NavigateToCareers(){
    this.route_service.navigateByUrl('careers-opportunities');
  }
}
