import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }

  // Example function to fetch data from an API endpoint
//   Getchartinfo(){
//     return this.http.get<any>("./assets/db.json").pipe(
//       map((data:{sales: any}) => data.sales));
//   }

//   Getchartcity(){
//     return this.http.get<any>("./assets/chart.json").pipe(
//       map((data:{info: any}) => data.info));
//   }

  Getcharttop(){
    return this.http.get<any>("./assets/shared.json").pipe(
      map((data:{topbar1: any}) => data.topbar1));
  }



  // Add more functions as needed for your specific data and operations
}

// export interface IData {
//   amount: number;
//   colorcode: string;
//   year: number;
// }
// export interface ICity {
//     title: string;
//     percent: number;
// }

export interface IBar {
    title: string;
    view: number;
    unique: number;
    canal: string,
    views2: number,
    uniques2: number,
  }