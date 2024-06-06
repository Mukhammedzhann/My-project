import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  // Example function to fetch data from an API endpoint
  Getchartinfo(){
    return this.http.get<any>("./assets/db.json").pipe(
      map((data:{sales: any}) => data.sales));
  }

  Getchartcity(){
    return this.http.get<any>("./assets/chart.json").pipe(
      map((data:{info: any}) => data.info));
  }




  // Add more functions as needed for your specific data and operations
}

export interface IData {
  amount: number;
  colorcode: string;
  year: number;
}
export interface ICity {
    title: string;
    percent: number;
}
