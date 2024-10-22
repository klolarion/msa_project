
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn } from "typeorm";
import { BankAccount } from "./bank_account.entity";


@Entity('bank_transactions')
export class BankTransaction {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => BankAccount, (account) => account.sentTransactions)
  fromAccount: BankAccount; // 송신 계좌

  @ManyToOne(() => BankAccount, (account) => account.receivedTransactions, { nullable: true })
  toAccount: BankAccount; // 수신 계좌

  @Column()
  toBankName: string; // 수신 은행 이름

  @Column({ nullable: true })
  toAccountNumber: string; // 수신 계좌번호

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number; // 거래 금액

  @Column('decimal', { precision: 15, scale: 2 })
  beforeBalance: number; // 거래 전 잔고

  @Column('decimal', { precision: 15, scale: 2 })
  afterBalance: number; // 거래 후 잔고

  @Column()
  transactionType: string; // 거래 유형

  @Column({ nullable: true })
  description: string; // 거래 설명

  @Column({ default: 'completed' })
  status: string; // 거래 상태

  @CreateDateColumn()
  transactionDate: Date; // 거래 발생 날짜
}