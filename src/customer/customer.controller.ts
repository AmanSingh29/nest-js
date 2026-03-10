import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { ICustomer } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly service: CustomerService) {}

  @Get()
  getAll(): ICustomer[] {
    return this.service.getAll();
  }

  @Post()
  createCustomer(@Body() dto: CreateCustomerDto) {
    return this.service.createCustomer(dto);
  }
}
