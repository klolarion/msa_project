
import { PaymentMethod } from '../payment/payment_method.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { BankTransaction } from './bank_transaction.entity';


@Entity('bank_accounts')
export class BankAccount {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => PaymentMethod, (paymentMethod) => paymentMethod.account)
  paymentMethods: PaymentMethod[];  

  // 송신 트랜잭션 목록
  @OneToMany(() => BankTransaction, (transaction) => transaction.fromAccount)
  sentTransactions: BankTransaction[];

  // 수신 트랜잭션 목록
  @OneToMany(() => BankTransaction, (transaction) => transaction.toAccount)
  receivedTransactions: BankTransaction[];

  @Column()
  memberId: string; // 사용자 식별자

  @Column({ unique: true })
  accountNumber: string; // 계좌번호

  @Column()
  bankName: string; // 은행명

  @Column()
  accountType: string; // 계좌 유형

  @Column('decimal', { precision: 15, scale: 2, default: 0 })
  balance: number; // 잔액

  @Column({ default: 'KRW' })
  currency: string; // 통화 단위

  @Column({ default: 'active' })
  status: string; // 계좌 상태

  @CreateDateColumn()
  createdAt: Date; // 생성 날짜

  @UpdateDateColumn()
  updatedAt: Date; // 마지막 수정 날짜

}