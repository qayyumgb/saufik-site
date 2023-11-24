import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersPageComponent } from './main/home/careers-page/careers-page.component';
import { JobDetailPageComponent } from './main/home/job-detail-page/job-detail-page.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  {path:'careers-opportunities', component : CareersPageComponent},
  {path:'job-details', component : JobDetailPageComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
