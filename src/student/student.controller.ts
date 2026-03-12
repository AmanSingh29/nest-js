import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('student')
export class StudentController {
  constructor(private readonly service: StudentService) {}

  @Get()
  @UseGuards(AuthGuard)
  getAll() {
    return this.service.getAllStudents();
  }

  @Get(':id')
  getById(@Param(':id') id: string) {
    this.service.getStudentById(Number(id));
  }

  @Post()
  create(@Body() { name, age }: { name: string; age: number }) {
    return this.service.createStudent({ name, age });
  }

  @Put(':id')
  update(
    @Param(':id') id: string,
    @Body() { name, age }: { name: string; age: number },
  ) {
    return this.service.updateData(Number(id), { name, age });
  }

  @Patch(':id')
  patch(
    @Param(':id') id: string,
    @Body() data: Partial<{ name: string; age: number }>,
  ) {
    return this.service.updateField(Number(id), data);
  }

  @Delete(':id')
  delete(@Param(':id') id: string) {
    return this.service.deleteStudent(Number(id));
  }
}
