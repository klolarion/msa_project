import { Transaction } from 'src/transactions/transaction.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToMany,
  } from 'typeorm';
  
  @Entity('accounts')
  export class Account {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    memberId: string;
  
    @Column({ unique: true })
    accountNumber: string;
  
    @Column('decimal', { precision: 15, scale: 2, default: 0 })
    balance: number;
  
    @CreateDateColumn()
    createdAt: Date;

      // Account와 Transaction 간의 양방향 관계 설정
    @OneToMany(() => Transaction, (transaction) => transaction.account)
    transactions: Transaction[];
  }
  