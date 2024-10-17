import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { Account } from '../accounts/account.entity';

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Account, (account) => account.transactions)
  account: Account;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column()
  transactionType: string;

  @CreateDateColumn()
  transactionDate: Date;
}
