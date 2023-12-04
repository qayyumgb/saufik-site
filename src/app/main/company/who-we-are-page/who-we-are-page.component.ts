import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { headerDataDto } from 'src/app/constant/models/headerDataDto';

@Component({
  selector: 'app-who-we-are-page',
  templateUrl: './who-we-are-page.component.html',
  styleUrls: ['./who-we-are-page.component.scss']
})
export class WhoWeArePageComponent {
  headertagData: headerDataDto={
    title:"about saufik",
    subTitle:"We're a software engineering company that <br> solves complea technical problems",
    tagline:"And we love doing it"
    
  }
}
