import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getProducts() {
    return this.userService.getAllUser();
  }

  @Get(':id')
  getUserByID(@Param('id') id: string) {
    return this.userService.getUserById(Number(id));
  }
}
