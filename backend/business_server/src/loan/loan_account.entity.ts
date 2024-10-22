import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { LoanProduct } from './loan_product.entity';

@Entity('loan_accounts')
export class LoanAccount {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => LoanProduct, (product) => product.loanAccounts)
  product: LoanProduct; // 연결된 대출 상품

  @Column()
  borrowerName: string; // 대출자 이름

  @Column('decimal', { precision: 15, scale: 2 })
  loanAmount: number; // 대출 금액

  @Column('decimal', { precision: 15, scale: 2 })
  remainingAmount: number; // 남은 상환 금액

  @Column()
  status: string; // 대출 상태 (예: active, closed, defaulted)

  @CreateDateColumn()
  createdAt: Date; // 대출 시작일

  @UpdateDateColumn()
  updatedAt: Date; // 마지막 갱신일
}