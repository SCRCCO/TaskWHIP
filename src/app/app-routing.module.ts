import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PROVINCEDETAILPAGEComponent } from './provincedetailpage/provincedetailpage.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'provincia/:nomeprovincia/:datetime',
    component:PROVINCEDETAILPAGEComponent
  }
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule { }
