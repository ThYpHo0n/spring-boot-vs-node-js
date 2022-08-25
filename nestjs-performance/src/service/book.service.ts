import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/model/book.model';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  findOne(isbn: string): Promise<Book> {
    return this.bookRepository.findOneBy({ isbn });
  }

  async remove(bookId: number): Promise<void> {
    await this.bookRepository.delete(bookId);
  }

  async save(book: Book): Promise<Book> {
    return this.bookRepository.save(book);
  }
}
