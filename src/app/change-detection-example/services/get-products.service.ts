import { Injectable } from '@angular/core'; 
 import {HttpClient, HttpClientModule } from '@angular/common/http';
 
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root',

})
export class GetProductsService {
  

  constructor(private http: HttpClient) { }

  LoadData(): Observable<any> {
    const url = 'https://fakestoreapi.com/products?limit=20';
    return this.http.get<any>(url);
       
  }
  
}
