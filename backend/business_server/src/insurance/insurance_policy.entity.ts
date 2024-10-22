import { InsuranceClaim } from './insurance_claim.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';


// 보험 계약 정보 관리

@Entity('insurance_policies')
export class InsurancePolicy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  policyName: string; // 보험 상품명

  @Column()
  policyType: string; // 보험 유형 (예: Life, Auto, Health)

  @Column('decimal', { precision: 15, scale: 2 })
  coverageAmount: number; // 보장 금액

  @Column('decimal', { precision: 10, scale: 2 })
  monthlyPremium: number; // 월 보험료

  @Column()
  status: string; // 계약 상태 (예: active, expired, cancelled)

  @CreateDateColumn()
  createdAt: Date; // 계약 생성일

  @UpdateDateColumn()
  updatedAt: Date; // 마지막 수정일

  @OneToMany(() => InsuranceClaim, (claim) => claim.policy)
  claims: InsuranceClaim[]; // 해당 보험과 관련된 청구 내역
}