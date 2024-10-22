import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { InvestmentProduct } from './investment_product.entity';

@Entity('stock_orders')
export class StockOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => InvestmentProduct, (product) => product)
  product: InvestmentProduct; // 주문한 상품

  @Column()
  orderType: string; // 주문 유형 (예: Buy, Sell)

  @Column('decimal', { precision: 10, scale: 2 })
  quantity: number; // 주문 수량

  @Column('decimal', { precision: 15, scale: 2 })
  totalPrice: number; // 총 주문 금액

  @CreateDateColumn()
  orderDate: Date; // 주문 일자
}