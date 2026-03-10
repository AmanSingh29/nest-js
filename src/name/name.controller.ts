import { Body, Controller, Post } from '@nestjs/common';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';

@Controller('name')
export class NameController {
  @Post()
  customPipe(@Body('name', new UppercasePipe()) name: string) {
    return { name };
  }
}
