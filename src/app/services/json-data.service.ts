import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceDto } from '../constant/models/serviceDto';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {
   jsonUrl = '../constant/json/serviceJson.json';

  constructor(private http:HttpClient) {


   }


  GetAllServiceJson():Observable<any>{
    return this.http.get<any>('../constant/json/serviceJson.json')
  }
}
