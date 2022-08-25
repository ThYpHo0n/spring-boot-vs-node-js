import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './model/user.model';
import { UsersService } from './service/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [TypeOrmModule, UsersService],
  providers: [UsersService],
})
export class UsersModule {}
