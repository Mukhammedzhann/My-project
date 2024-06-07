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

  // Getcharttop(){
  //   return this.http.get<any>("./assets/shared.json").pipe(
  //     map((data:{topbar1: any}) => data.topbar1));
  // }
  // Getcharttop2(){
  //   return this.http.get<any>("./assets/shared.json").pipe(
  //     map((data:{topbar2: any}) => data.topbar2));
  // }
  Getcharttop3(){
    return this.http.get<any>("./assets/shared.json");
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

export interface IBar1 {
  url: string;
  view: number;
  unique: number;
}

export interface IBar2 {
  url: string,
  view: number,
  unique: number,
}
