import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private _HttpClient:HttpClient) {}

  baseUrl:string =`http://localhost:3000/`
  // http://localhost:3000/transactions`
  getCustomers():Observable<any>{
    return this._HttpClient.get(this.baseUrl+`customers`)
  }
  getTransactions():Observable<any>{
    return this._HttpClient.get(this.baseUrl+`transactions`)
  }
}

