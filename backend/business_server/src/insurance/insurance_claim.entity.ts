import { InsurancePolicy } from './insurance_policy.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';


// 보험 청구 내역 관리

@Entity('insurance_claims')
export class InsuranceClaim {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => InsurancePolicy, (policy) => policy.claims)
  policy: InsurancePolicy; // 연결된 보험 계약

  @Column()
  claimType: string; // 청구 유형 (예: Accident, Health)

  @Column('decimal', { precision: 10, scale: 2 })
  claimAmount: number; // 청구 금액

  @Column({ default: 'pending' })
  status: string; // 청구 상태 (예: pending, approved, denied)

  @Column({ nullable: true })
  description: string; // 청구 설명

  @CreateDateColumn()
  createdAt: Date; // 청구 요청일
}