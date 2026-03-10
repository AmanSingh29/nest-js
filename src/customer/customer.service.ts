import { Injectable } from '@nestjs/common';
import { ICustomer } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/customer.dto';

@Injectable()
export class CustomerService {
  private customers: ICustomer[] = [];

  getAll(): ICustomer[] {
    return this.customers;
  }

  createCustomer(customerDto: CreateCustomerDto): ICustomer {
    const newCustomer: ICustomer = {
      id: Date.now(),
      ...customerDto,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }
}
