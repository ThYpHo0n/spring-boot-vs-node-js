import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookController } from './controller/book.controller';
import { Book } from './model/book.model';
import { Order } from './model/order.model';
import { User } from './model/user.model';
import { BookService } from './service/book.service';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Order, User])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
