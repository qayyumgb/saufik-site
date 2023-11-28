import { Component } from '@angular/core';

@Component({
  selector: 'app-software-dev',
  templateUrl: './software-dev.component.html',
  styleUrls: ['./software-dev.component.scss']
})
export class SoftwareDevComponent {


  toggleAccordient(e: any) {
    
    let allFaq: any = document.querySelectorAll(".faqAccord")
    for (let item of allFaq) {
      if (item.firstChild != e.currentTarget) {
        item.classList.remove("show")
      }
    }
    if (e.currentTarget.parentElement.classList.contains("show")) {
      e.currentTarget.parentElement.classList.remove("show")
    } else {
      e.currentTarget.parentElement.classList.add("show")
    }
  }
}
