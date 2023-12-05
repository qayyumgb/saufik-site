import { Component } from '@angular/core';
import { headerDataDto } from 'src/app/constant/models/headerDataDto';

@Component({
  selector: 'app-saufik-life',
  templateUrl: './saufik-life.component.html',
  styleUrls: ['./saufik-life.component.scss']
})
export class SaufikLifeComponent {
  headertagData:headerDataDto = {
    title :"Life at Saufik",
    subTitle :"Go behind the scenes and learn <br>  about life at Saufik.",
    tagline :"Our trust our power",
  }
}
