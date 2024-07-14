import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{Chart,registerables}from 'node_modules/chart.js';
import { Customers } from 'src/app/interface/customers';
import { Transactions } from 'src/app/interface/transactions';
import { TransactionsService } from 'src/app/server/transactions.service';
Chart.register(...registerables);
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit{
  constructor(private _TransactionsService:TransactionsService,  private _ActivatedRoute:ActivatedRoute){}
  customers : Customers[] =[];
  customer!:{};
  transactions : Transactions[] =[];
  transact:Transactions[]=[];
  customerId!:string|null;
  customerName!:string|null;

  ngOnInit(): void {
    //put the id of the customer selected in  customerId variable to use it then.
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.customerId = params.get('Id')
        console.log(this.customerId)
      }

    })
    //function to take the data of the customer who selected.
    this._TransactionsService.getCustomers().subscribe({
      next:(response)=>{
        this.customers =response;
          for(let i =0; i<this.customers.length;i++){
              const id = Number (this.customerId);
                if(this.customers[i].id== id){
                  this.customer=this.customers[i]
                  this.customerName=this.customers[i].name

                  console.log(this.customer);

                }

          }
      }
    })
    //function to take  the data of the customer's transactions who selected.
      this._TransactionsService.getTransactions().subscribe({
        next:(response)=>{

          this.transactions =response;
          for(let i =0; i<this.transactions.length;i++){
            const id = Number (this.customerId);
            if(this.transactions[i].customer_id== id){
              this.transact.push (this.transactions[i])
              console.log(this.transact);

            }

          }
      this.getDates()

        }
   })
  }
// function to take the data which be the labels for x y axis and input it in chart func.
getDates(){
// input the data of the data and the amount of transaction in array for each.
    const date = this.transact.map(function(index){return index.date})
    const amount = this.transact.map(function(index){return index.amount})

  console.log(date);
  console.log(amount);
// call chart function with data array and amount of transactions array as arguments.
  this.chart(date,amount);
}

// chart js function with change the x and y axis labels.
chart(date:any[] , amount:any[]){

  var myChart = new Chart('chart', {
    type: 'bar',
    data: {
        labels: date,
        datasets: [{
            label: 'his transactions per day',
            data: amount,
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {

        }
    }
});

}
}
