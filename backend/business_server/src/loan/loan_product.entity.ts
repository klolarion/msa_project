import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { LoanAccount } from './loan_account.entity';

@Entity('loan_products')
export class LoanProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string; // 대출 상품명

  @Column('decimal', { precision: 5, scale: 2 })
  interestRate: number; // 이자율 (예: 3.5%)

  @Column('decimal', { precision: 15, scale: 2 })
  maxLoanAmount: number; // 최대 대출 한도

  @Column()
  repaymentPeriod: string; // 상환 기간 (예: 12개월, 24개월)

  @OneToMany(() => LoanAccount, (account) => account.product)
  loanAccounts: LoanAccount[];
}