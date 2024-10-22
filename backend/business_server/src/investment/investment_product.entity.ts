import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { InvestmentFirm } from './intvetment_firm.entity';

@Entity('investment_products')
export class InvestmentProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => InvestmentFirm, (firm) => firm.products)
  firm: InvestmentFirm; // 해당 상품을 제공하는 증권사

  @Column()
  productType: string; // 상품 유형 (예: 주식, 펀드, 채권, 연금)

  @Column()
  name: string; // 상품 이름 (예: 삼성전자 주식, 미래에셋 펀드)

  @Column('decimal', { precision: 15, scale: 2 })
  price: number; // 현재 가격 또는 단가

  @Column({ nullable: true })
  currency: string; // 통화 (예: KRW, USD)
}