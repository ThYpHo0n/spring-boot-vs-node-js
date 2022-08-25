import {
  BeforeInsert,
  Column,
  Entity,
  getManager,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.model';

@Entity('users')
export class User {
  @BeforeInsert()
  async beforeInsert(): Promise<void> {
    const res = await getManager().query(
      'select library.users_user_id_seq.nextval ID from dual',
    );
    this.userId = res[0].ID;
  }

  @PrimaryGeneratedColumn('increment', { name: 'user_id' })
  userId: number;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @OneToMany(() => Order, (order) => order.book)
  orders: Order[];
}
