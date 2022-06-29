import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { modelloprov } from './modelloprov';

@Component({
  selector: 'app-provincedetailpage',
  templateUrl: './provincedetailpage.component.html',
  styleUrls: ['./provincedetailpage.component.css'],
})
export class PROVINCEDETAILPAGEComponent implements OnInit {
  public prov: any;
  public data: any;
  public datum: any;
  public estrazione: any;
  public risultato: any = [];
  public current = new Date();
  public attuale = Math.floor(this.current.getTime() / 1000);

  constructor(private route: ActivatedRoute) {}
  /* ATTENZIONE!!! {"error":{"code":1008,"message":"API key is limited to get history data. Please check our pricing page and upgrade to higher plan."}} */
  ngOnInit() {
    this.prov = this.route.snapshot.paramMap.get('nomeprovincia');
    this.data = this.route.snapshot.paramMap.get('datetime');
    console.log(this.CONTIENElettere(this.data));
    if (this.CONTIENElettere(this.data) == true) {
      this.toTimestamp(this.data);
      this.data = Math.floor(this.datum / 1000);
      this.OttieniLE3OREVECCHIO();
    }

    console.log(this.data);

    this.OttieniLE3ORESUCCESIVE();
    console.log(this.risultato);
  }

  CONTIENElettere(CHECKDATA: any) {
    return CHECKDATA.includes('-');
  }
  toTimestamp(strDate: any) {
    this.datum = Date.parse(strDate);
    return this.datum / 1000;
  }
  async OttieniLE3OREVECCHIO() {
    const chiave = '0629d7e86cae4f8a8d4164835222606';
    await fetch(
      'http://api.weatherapi.com/v1/history.json?key=' +
        chiave +
        '&q=+' +
        this.prov +
        '&aqi=no&unixdt=' +
        this.data +
        ''
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.estrazione = responseJson;

        console.log(this.estrazione);
        this.risultato.push([
          new modelloprov(
            this.prov,
            this.estrazione.forecast.forecastday[0].hour[0].temp_c,
            this.estrazione.forecast.forecastday[0].hour[3].temp_c,
            this.estrazione.forecast.forecastday[0].hour[6].temp_c,
            this.estrazione.forecast.forecastday[0].hour[9].temp_c,
            this.estrazione.forecast.forecastday[0].hour[12].temp_c,
            this.estrazione.forecast.forecastday[0].hour[15].temp_c,
            this.estrazione.forecast.forecastday[0].hour[18].temp_c,
            this.estrazione.forecast.forecastday[0].hour[21].temp_c,
            this.estrazione.forecast.forecastday[0].hour[23].temp_c,
            this.estrazione.forecast.forecastday[0].hour[0].condition.icon,
            this.estrazione.forecast.forecastday[0].hour[3].condition.icon,
            this.estrazione.forecast.forecastday[0].hour[6].condition.icon,
            this.estrazione.forecast.forecastday[0].hour[9].condition.icon,
            this.estrazione.forecast.forecastday[0].hour[12].condition.icon,
            this.estrazione.forecast.forecastday[0].hour[15].condition.icon,
            this.estrazione.forecast.forecastday[0].hour[18].condition.icon,
            this.estrazione.forecast.forecastday[0].hour[21].condition.icon,
            this.estrazione.forecast.forecastday[0].hour[23].condition.icon,
            this.estrazione.forecast.forecastday[0].hour[0].time,
            this.estrazione.forecast.forecastday[0].hour[3].time,
            this.estrazione.forecast.forecastday[0].hour[6].time,
            this.estrazione.forecast.forecastday[0].hour[9].time,
            this.estrazione.forecast.forecastday[0].hour[12].time,
            this.estrazione.forecast.forecastday[0].hour[15].time,
            this.estrazione.forecast.forecastday[0].hour[18].time,
            this.estrazione.forecast.forecastday[0].hour[21].time,
            this.estrazione.forecast.forecastday[0].hour[23].time
          ),
        ]);
      });
  }

  async OttieniLE3ORESUCCESIVE() {
    const chiave = '0629d7e86cae4f8a8d4164835222606';
    await fetch(
      'http://api.weatherapi.com/v1/forecast.json?key=' +
        chiave +
        '&q=+' +
        this.prov +
        '&aqi=no&unixdt=' +
        this.data +
        ''
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.estrazione = responseJson;

        console.log(this.estrazione);
        this.risultato.push([
          new modelloprov(
            this.prov,
            this.estrazione.forecast.forecastday[0].hour[0].temp_c,
            this.estrazione.forecast.forecastday[0].hour[3].temp_c,
            this.estrazione.forecast.forecastday[0].hour[6].temp_c,
            this.estrazione.forecast.forecastday[0].hour[9].temp_c,
            this.estrazione.forecast.forecastday[0].hour[12].temp_c,
            this.estrazione.forecast.forecastday[0].hour[15].temp_c,
            this.estrazione.forecast.forecastday[0].hour[18].temp_c,
            this.estrazione.forecast.forecastday[0].hour[21].temp_c,
            this.estrazione.forecast.forecastday[0].hour[23].temp_c,
            this.estrazione.forecast.forecastday[0].hour[0].condition.icon,
            this.estrazione.forecast.forecastday[0].hour[3].condition.icon,
            this.estrazione.forecast.forecastday[0].hour[6].condition.icon,
            this.estrazione.forecast.forecastday[0].hour[9].condition.icon,
            this.estrazione.forecast.forecastday[0].hour[12].condition.icon,
            this.estrazione.forecast.forecastday[0].hour[15].condition.icon,
            this.estrazione.forecast.forecastday[0].hour[18].condition.icon,
            this.estrazione.forecast.forecastday[0].hour[21].condition.icon,
            this.estrazione.forecast.forecastday[0].hour[23].condition.icon,
            this.estrazione.forecast.forecastday[0].hour[0].time,
            this.estrazione.forecast.forecastday[0].hour[3].time,
            this.estrazione.forecast.forecastday[0].hour[6].time,
            this.estrazione.forecast.forecastday[0].hour[9].time,
            this.estrazione.forecast.forecastday[0].hour[12].time,
            this.estrazione.forecast.forecastday[0].hour[15].time,
            this.estrazione.forecast.forecastday[0].hour[18].time,
            this.estrazione.forecast.forecastday[0].hour[21].time,
            this.estrazione.forecast.forecastday[0].hour[23].time
          ),
        ]);
      });
  }
}
