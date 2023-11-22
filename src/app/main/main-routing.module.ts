import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SoftwareDevComponent } from './home/software-dev/software-dev.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    
    children:[
      { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    ]
    

  },
   {path:'software-development-services', component : SoftwareDevComponent},

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
