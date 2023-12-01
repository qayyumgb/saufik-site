import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaufikAccomplishmentsComponent } from './saufik-accomplishments/saufik-accomplishments.component';
import { SaufikLeadershipComponent } from './saufik-leadership/saufik-leadership.component';
import { GlobalPresenceComponent } from './global-presence/global-presence.component';
import { WhoWeArePageComponent } from './who-we-are-page/who-we-are-page.component';


const routes: Routes = [
  {
    path: "accomplishments", component: SaufikAccomplishmentsComponent,
  },
  {
    path: "leadership", component: SaufikLeadershipComponent,
  },
  {
    path: "global-presence", component: GlobalPresenceComponent,
  },
  {
    path:"who-we-are", component :WhoWeArePageComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
