import { Component, OnInit } from '@angular/core';
import { modelloistanza } from '../istanza/modelloistanza.model';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-istanze',
  templateUrl: './istanze.component.html',
  styleUrls: ['./istanze.component.css']
})
export class IstanzeComponent implements OnInit {

    /* (nome : string, temperatura : string, icona : string) */

   public istanze:modelloistanza[]=
  [new modelloistanza('Puglia',"29°","ciao",'stoca'),]



  constructor() { }

  ngOnInit(): void {

  }

}
