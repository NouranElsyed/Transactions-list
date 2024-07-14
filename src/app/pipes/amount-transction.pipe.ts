import { Pipe, PipeTransform } from '@angular/core';
import { Transactions } from '../interface/transactions';
import { transition } from '@angular/animations';

@Pipe({
  name: 'amountTransaction'
})
export class AmountTransctionPipe implements PipeTransform {



   transform( transactions:Transactions[],min:number,max:number): Transactions[] {

    return transactions.filter((item)=>item.amount>=min && item.amount<=max);
  }

}
