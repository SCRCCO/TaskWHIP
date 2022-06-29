import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { modelloTEMP } from '../modello/modelloTEMP';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http : HttpClient) { }

public ottieniTemp ( nomeCITTa:any): Observable<modelloTEMP>{
  const chiave = '0629d7e86cae4f8a8d4164835222606'
  return this.http.get<modelloTEMP>('http://api.weatherapi.com/v1/current.json?key='+chiave+'&q='+nomeCITTa+'&aqi=no')

}
}

