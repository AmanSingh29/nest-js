import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { NameController } from './name/name.controller';

@Module({
  imports: [UserModule, CategoryModule, StudentModule, CustomerModule],
  controllers: [AppController, UserController, NameController],
  providers: [AppService, UserService],
})
export class AppModule {}
