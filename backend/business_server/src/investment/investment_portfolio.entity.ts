import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { StockOrder } from './stock_order.entity';

@Entity('investment_portfolios')
export class InvestmentPortfolio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ownerId: string; // 사용자 ID

  @OneToMany(() => StockOrder, (order) => order.product)
  orders: StockOrder[]; // 포트폴리오 내의 주문 내역

  @Column('decimal', { precision: 15, scale: 2, default: 0 })
  totalValue: number; // 포트폴리오 총 가치
}