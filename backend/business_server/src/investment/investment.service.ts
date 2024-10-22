import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InvestmentProduct } from './investment_product.entity';
import { StockOrder } from './stock_order.entity';
import { InvestmentPortfolio } from './investment_portfolio.entity';
import { InvestmentFirm } from './intvetment_firm.entity';

@Injectable()
export class InvestmentService {
  constructor(
    @InjectRepository(InvestmentFirm)
    private firmRepository: Repository<InvestmentFirm>,
    @InjectRepository(InvestmentProduct)
    private productRepository: Repository<InvestmentProduct>,
    @InjectRepository(StockOrder)
    private orderRepository: Repository<StockOrder>,
    @InjectRepository(InvestmentPortfolio)
    private portfolioRepository: Repository<InvestmentPortfolio>,
  ) {}

  // 1. 증권사 생성
  async createFirm(data: Partial<InvestmentFirm>): Promise<InvestmentFirm> {
    const firm = this.firmRepository.create(data);
    return this.firmRepository.save(firm);
  }

  // 2. 모든 증권사 조회
  async getAllFirms(): Promise<InvestmentFirm[]> {
    return this.firmRepository.find({ relations: ['products'] });
  }

  // 3. 투자 상품 생성
  async createProduct(data: Partial<InvestmentProduct>): Promise<InvestmentProduct> {
    const firm = await this.firmRepository.findOneBy({ id: data.firm.id });
    if (!firm) throw new NotFoundException('Investment firm not found');

    const product = this.productRepository.create({ ...data, firm });
    return this.productRepository.save(product);
  }

  // 4. 모든 투자 상품 조회
  async getAllProducts(): Promise<InvestmentProduct[]> {
    return this.productRepository.find({ relations: ['firm'] });
  }

  // 5. 주문 생성
  async createOrder(data: Partial<StockOrder>): Promise<StockOrder> {
    const product = await this.productRepository.findOneBy({ id: data.product.id });
    if (!product) throw new NotFoundException('Investment product not found');

    const order = this.orderRepository.create({ ...data, product });
    return this.orderRepository.save(order);
  }

  // 6. 모든 주문 내역 조회
  async getAllOrders(): Promise<StockOrder[]> {
    return this.orderRepository.find({ relations: ['product'] });
  }

  // 7. 포트폴리오 생성
  async createPortfolio(ownerId: string): Promise<InvestmentPortfolio> {
    const portfolio = this.portfolioRepository.create({ ownerId, totalValue: 0 });
    return this.portfolioRepository.save(portfolio);
  }

  // 8. 포트폴리오에 주문 추가
  async addOrderToPortfolio(portfolioId: number, orderId: number): Promise<InvestmentPortfolio> {
    const portfolio = await this.portfolioRepository.findOne({ where: { id: portfolioId }, relations: ['orders'] });
    const order = await this.orderRepository.findOneBy({ id: orderId });

    if (!portfolio) throw new NotFoundException('Portfolio not found');
    if (!order) throw new NotFoundException('Order not found');

    portfolio.orders = [...(portfolio.orders || []), order];
    portfolio.totalValue += order.totalPrice;

    return this.portfolioRepository.save(portfolio);
  }

  // 9. 특정 사용자의 포트폴리오 조회
  async getPortfolioByOwner(ownerId: string): Promise<InvestmentPortfolio[]> {
    return this.portfolioRepository.find({
      where: { ownerId },
      relations: ['orders', 'orders.product'],
    });
  }
}