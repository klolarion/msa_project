
import { BankAccount } from "../bank/bank_account.entity";
import { PaymentTransaction } from "./payment_transaction.entity";
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, OneToMany } from "typeorm";


@Entity('payment_methods')
export class PaymentMethod {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => BankAccount, (account) => account.paymentMethods)
  account: BankAccount; // 결제 수단 소유 계좌

  @Column()
  type: string; // 결제 유형 (예: CreditCard, Wallet)

  @Column()
  provider: string; // 카드 발급사 또는 지갑 제공자 (예: Visa, PayPal)

  @Column()
  accountNumber: string; // 카드 또는 계좌 번호

  @Column({ nullable: true })
  expiryDate: Date; // 카드의 유효기간

  @Column({ default: 'active' })
  status: string; // 결제 수단 상태 (예: active, inactive)

  @OneToMany(() => PaymentTransaction, (transaction) => transaction.paymentMethod)
  transactions: PaymentTransaction[];
}