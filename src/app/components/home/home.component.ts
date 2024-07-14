import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/interface/customers';
import { Transactions } from 'src/app/interface/transactions';
import { TransactionsService } from 'src/app/server/transactions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private _TransactionsService:TransactionsService){}

  customers : Customers[] =[];
  transactions : Transactions[] =[];
  term: string ='';
  min!:number;
  max! :number;
  bool:boolean=false


  ngOnInit(): void {
  //calling for customer data
    this._TransactionsService.getCustomers().subscribe({
      next:(response)=>{
        console.log(response);
        this.customers =response;
      }
    })
  //calling for transactions data

      this._TransactionsService.getTransactions().subscribe({
        next:(response)=>{
          console.log(response);
          this.transactions =response;
        }
      })

  }
// function to display the data whose filtered with min and max amount by pipe called amount-transactions
//this function  will be called when click in the button filter
  filterAmount() {

    this.bool=true
return this.bool;
 }
 // function to  disable the the filtered data and display all data when the input of max or min change.
 reset() {
  this.bool=false
return this.bool;
}

}
