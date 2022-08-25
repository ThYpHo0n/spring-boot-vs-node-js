import { getDefaultSettings } from 'http2';
import {
  BeforeInsert,
  Column,
  Entity,
  getManager,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.model';

@Entity('books')
export class Book {
  @BeforeInsert()
  async beforeInsert(): Promise<void> {
    const res = await getManager().query(
      'select library.books_book_id_seq.nextval ID from dual',
    );
    this.bookId = res[0].ID;
  }

  @PrimaryGeneratedColumn('increment', { name: 'book_id' })
  bookId: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  isbn: string;

  @Column()
  year: number;

  @OneToMany(() => Order, (order) => order.book)
  @JoinColumn({ name: 'book_id', referencedColumnName: 'book_id' })
  orders: Order[];
}
