import {
  BeforeInsert,
  Column,
  Entity,
  getManager,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Book } from './book.model';
import { User } from './user.model';

@Entity('orders')
export class Order {
  @BeforeInsert()
  async beforeInsert(): Promise<void> {
    const res = await getManager().query(
      'select library.ORDERS_ORDER_ID_SEQ.nextval ID from dual',
    );
    this.orderId = res[0].ID;
  }

  @PrimaryGeneratedColumn('increment', { name: 'order_id' })
  orderId: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Book, (book) => book.orders)
  @JoinColumn({ name: 'book_id', referencedColumnName: 'bookId' })
  book: Book;

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'userId' })
  user: User;
}
