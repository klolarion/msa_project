import { PaymentMethod } from "./payment_method.entity";
import { Entity, ManyToOne, Column, CreateDateColumn } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";


@Entity('payment_transactions')
export class PaymentTransaction {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PaymentMethod, (paymentMethod) => paymentMethod.transactions)
  paymentMethod: PaymentMethod; // 사용된 결제 수단

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number; // 결제 금액

  @Column()
  currency: string; // 통화 (예: KRW, USD)

  @Column({ default: 'pending' })
  status: string; // 결제 상태 (pending, completed, failed)

  @Column({ nullable: true })
  description: string; // 결제 설명

  @CreateDateColumn()
  createdAt: Date; // 결제 요청 시간
}