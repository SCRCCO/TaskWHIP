import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IstanzeComponent } from './istanze/istanze.component';
import { PROVINCEDETAILPAGEComponent } from './provincedetailpage/provincedetailpage.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IstanzeComponent,
    PROVINCEDETAILPAGEComponent,

],

  imports: [
    BrowserModule,
    FormsModule,

    HttpClientModule,
     AppRoutingModule,
     RouterModule.forRoot([
      {path: "provincedetailpage",component: PROVINCEDETAILPAGEComponent},
      {path: "",component: HomeComponent}

  ])
  ],
  providers: [HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
