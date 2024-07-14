import { Pipe, PipeTransform } from '@angular/core';
import { Customers } from '../interface/customers';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(Customers:Customers[],term:string): Customers[] {
    return Customers.filter((item)=>item.name.toLowerCase().includes(term.toLowerCase()));
  }

}
