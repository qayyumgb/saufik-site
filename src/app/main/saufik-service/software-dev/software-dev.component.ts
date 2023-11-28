import { Component } from '@angular/core';

@Component({
  selector: 'app-software-dev',
  templateUrl: './software-dev.component.html',
  styleUrls: ['./software-dev.component.scss']
})
export class SoftwareDevComponent {

accordian:any=[
  {
    name:"Who should use web development services?",
    des:`Any fast-growing tech business that wants to build static sites,
    dynamic and single page websites, online e-commerce stores, portal web apps, animated web apps, web apps
    with a content management system, and progressive web applications (PWAs).`
  },{
    name:"Industries we serve",
    des:`We have the biggest experience working with fintech, martech,
    gamedev,
    edtech and IoT companies, but we’re open to exploring new industries.`
  },{
    name:"What does a typical team look like?",
    des:`The setup depends on your product maturity and needs but it can
    include
    experienced frontend and backend developers, QA engineers, Software Architects, UI/UX
    Designers, Scrum Masters, Business Analysts and DevOps engineers.`
  },{
    name:"What is the process?",
    des:`Strategy: We make sure the product is feasible and create a
    prioritized
    roadmap of outcome-based goals that contribute to a product vision. Discovery: We work together as one team to find the best ideas to
    reach the
    desired goals. Creating innovative web apps can be a very complex mission.
    Delivery: First, we design and compose requirements for developers.
    Then we
    design the system and build the most critical business features. Finally, we do more tests
    to be sure that the product is as perfect as possible`
  }
]
  toggleAccordient(e: any) {
    var curr: any
    debugger
    if (e.currentTarget.firstChild.classList.contains("collapsed")) {
      e.currentTarget.firstChild.classList.remove("collapsed")
      e.currentTarget.nextSibling.classList.add("show")
    }
    else {
      e.currentTarget.firstChild.classList.add("collapsed")
      e.currentTarget.nextSibling.classList.remove("show")
    }
  }
}
