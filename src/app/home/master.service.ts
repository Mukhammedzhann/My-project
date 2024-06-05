import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  // Example function to fetch data from an API endpoint
  Getchartinfo(){
    return this.http.get("http://localhost:3001/sales")
  }


  // Add more functions as needed for your specific data and operations
}
