import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JsonDataService } from 'src/app/services/json-data.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {
  navItems:any[] =[]
  constructor(private router: Router, private jsonService:JsonDataService){
    this.jsonService.GetAllMenuItems().subscribe(data => this.navItems = data)
  }

  ngOnint(){
    
  }

  changeRoute(getRoute:any){
    this.router.navigate([`${getRoute}`])
  }

  househover:boolean = false;
  submenumousehover(a:boolean){
    this.househover = a;
  }

}
