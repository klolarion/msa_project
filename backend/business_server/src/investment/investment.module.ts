import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestmentService } from './investment.service';
import { InvestmentController } from './investment.controller';
import { InvestmentFirm } from './intvetment_firm.entity';
import { InvestmentPortfolio } from './investment_portfolio.entity';
import { InvestmentProduct } from './investment_product.entity';
import { StockOrder } from './stock_order.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([InvestmentFirm, InvestmentProduct, StockOrder, InvestmentPortfolio]),
  ],
  providers: [InvestmentService],
  controllers: [InvestmentController],
})
export class InvestmentModule {}