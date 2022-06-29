import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { modelloTEMP } from '../modello/modelloTEMP';
import { DatabaseService } from '../services/database.service';
import { modelloistanza } from '../istanza/modelloistanza.model';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { Injectable } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})



  
export class HomeComponent implements OnInit  {
  public INPUTRICERCA:any;
  public INPUTDATA:any;
  public DACERCARE:any=[];
  public DATADACERCARE:any=[];
  public ricerca:any;
  public dataa:any;
  public message = 'ciao'
  public current = new Date();
  public timestamp = Math.floor(this.current.getTime()/1000);
  
  /* Math.floor(date.getTime()/1000) */

/* (nome : string, temperatura : string, icona : string) */

  
 INSERISCI()
    {
     this.ricerca= this.INPUTRICERCA;
     this.dataa= this.INPUTDATA;
     this.DACERCARE.push(this.ricerca);
     this.DATADACERCARE.push(this.dataa)


    }


    
    

  
  public lat:any ;
  public lng:any;
  public provinvia_client:any
  public quantesiete:any
  public province:any
  
  public provdirif:any;
  public Tempprovdirif:any;
  public TEMPERATURA:any;
  public celsius:any;
  public icona:any;
  public comeeiltempo:any;
  public item:any;
  public parola:any;
 



  public istanza:any=[]
  public istanze:any=[]

  


  
  constructor(public databasetemp: DatabaseService){

  }
  
  DATImeteo: any;
  nomeCITTA?:string;
  lunghezzaLista:any;
  public listaProvince:Array<string> =[];








 


  public ngOnInit(): void {
    
    

    this.ottienicoordinate();
    this.EstraiPROVINCEconDATI();
    this.OTTIENIdati('arezzo')
    
    console.log(this.myDate)
    console.log(this.istanze)
    console.log(this.timestamp)
    
/*     [0][0].nome
    [0][0].temperatura
    [1][0].nome
    [1][0].temperatura


 */
    
  }
  myDate = new Date();



  ottienicoordinate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
        if (position) {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.ConvertilatelonginPROV(this.lat,this.lng)
          
          
        }
      },
        (error: GeolocationPositionError) => console.log(error));
    } else {
      alert("Non funziona lo script per la geocalizzazione");
    }
    return this.lat,this.lng
  }
  
   async ConvertilatelonginPROV (lat:string,lng:string){
    /* 15,000 transactions alm ese */
    const keyQUESTAPI = 'IZdtclvUgPwGGeMQjGfzZNOtT4IGBSA2'
    
      await fetch(

      'http://www.mapquestapi.com/geocoding/v1/reverse?key='+keyQUESTAPI+'&location='+lat+','+lng+'&includeRoadMetadata=false&includeNearestIntersection=false')
      .then((response) => response.json())
      .then((responseJson) => {
        
        this.provinvia_client= responseJson.results[0].locations[0].adminArea5

        return this.provinvia_client
      });
      
      
    
     
      
      
  };

  OTTIENIdati (nomeCITTA: string) {
    this.databasetemp.ottieniTemp(nomeCITTA).subscribe({next: (response) => 
      {this.DATImeteo = response;}})

  }
  async EstraiPROVINCEconDATI () {
    const chiave = '0629d7e86cae4f8a8d4164835222606'
    await fetch('https://comuni-ita.herokuapp.com/api/province')
    .then((response)=> response.json())
    .then((responseJson) => {

      this.province= responseJson;
      this.quantesiete = Object.keys(this.province).length;

      for (let i = 0; i < this.quantesiete; i++) {

        
        
        this.listaProvince.push(this.province[i].nome);
        
         fetch('http://api.weatherapi.com/v1/current.json?key='+chiave+'&q='+this.province[i].nome+'&aqi=no').then((response) => response.json())
        .then((responseJson) => {
          
          this.celsius = responseJson;
          this.listaProvince.push((this.celsius.current.temp_c))
          this.icona=this.celsius.current.condition.icon
          this.comeeiltempo=this.celsius.current.condition.text

         /*  (nome : string, temperatura : string,  text:string, icon:string) */
          this.istanze.push([new modelloistanza(this.province[i].nome,this.celsius.current.temp_c,this.comeeiltempo,"https:"+this.icona)]  )

    
      

          
          
        });
    
      }
      this.OttieniLUNGHEZZA(this.listaProvince)
      
      
  

      


    
    });
    

  };

  OttieniLUNGHEZZA(listadamisurare:any){
    this.lunghezzaLista = listadamisurare.length

    return this.lunghezzaLista

  }
  

  handleMenuClick (parola:any) {

    this.item = parola

  
  }



}

    
    
    
  
