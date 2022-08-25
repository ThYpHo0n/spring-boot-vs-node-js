import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Book } from 'src/model/book.model';
import { BookService } from 'src/service/book.service';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async readAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Post()
  async saveBook(@Body() book: Book): Promise<Book> {
    return this.bookService.save(book);
  }

  @Get(':isbn')
  async findOne(@Param('isbn') isbn: string): Promise<Book> {
    return this.bookService.findOne(isbn);
  }
}
