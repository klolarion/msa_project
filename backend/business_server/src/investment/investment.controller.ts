import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { InvestmentService } from './investment.service';
import { InvestmentProduct } from './investment_product.entity';
import { StockOrder } from './stock_order.entity';
import { InvestmentPortfolio } from './investment_portfolio.entity';
import { InvestmentFirm } from './intvetment_firm.entity';

@Controller('investment')
export class InvestmentController {
  constructor(private readonly investmentService: InvestmentService) {}

  @Post('firms')
  async createFirm(@Body() data: Partial<InvestmentFirm>): Promise<InvestmentFirm> {
    return this.investmentService.createFirm(data);
  }

  @Get('firms')
  async getAllFirms(): Promise<InvestmentFirm[]> {
    return this.investmentService.getAllFirms();
  }

  @Post('products')
  async createProduct(@Body() data: Partial<InvestmentProduct>): Promise<InvestmentProduct> {
    return this.investmentService.createProduct(data);
  }

  @Get('products')
  async getAllProducts(): Promise<InvestmentProduct[]> {
    return this.investmentService.getAllProducts();
  }

  @Post('orders')
  async createOrder(@Body() data: Partial<StockOrder>): Promise<StockOrder> {
    return this.investmentService.createOrder(data);
  }

  @Get('orders')
  async getAllOrders(): Promise<StockOrder[]> {
    return this.investmentService.getAllOrders();
  }

  @Post('portfolios')
  async createPortfolio(@Body('ownerId') ownerId: string): Promise<InvestmentPortfolio> {
    return this.investmentService.createPortfolio(ownerId);
  }

  @Post('portfolios/:portfolioId/orders/:orderId')
  async addOrderToPortfolio(
    @Param('portfolioId') portfolioId: number,
    @Param('orderId') orderId: number,
  ): Promise<InvestmentPortfolio> {
    return this.investmentService.addOrderToPortfolio(portfolioId, orderId);
  }

  @Get('portfolios/:ownerId')
  async getPortfolioByOwner(@Param('ownerId') ownerId: string): Promise<InvestmentPortfolio[]> {
    return this.investmentService.getPortfolioByOwner(ownerId);
  }
}