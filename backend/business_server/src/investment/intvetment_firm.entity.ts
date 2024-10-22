import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { InvestmentProduct } from './investment_product.entity';
@Entity('investment_firms')
export class InvestmentFirm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string; // 증권사 또는 투자사 이름

  @Column()
  country: string; // 국가

  @OneToMany(() => InvestmentProduct, (product) => product.firm)
  products: InvestmentProduct[];
}