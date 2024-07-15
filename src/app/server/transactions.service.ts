import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private _HttpClient:HttpClient) {}

  baseUrl:string =`https://nouranelsyed.github.io/api/db.json`

  getCustomers():Observable<any>{
    return this._HttpClient.get(this.baseUrl)
  }
  getTransactions():Observable<any>{
    return this._HttpClient.get(this.baseUrl)
  }
}

