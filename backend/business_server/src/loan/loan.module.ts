import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanService } from './loan.service';
import { LoanController } from './loan.controller';
import { LoanAccount } from './loan_account.entity';
import { LoanProduct } from './loan_product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LoanProduct, LoanAccount])],
  providers: [LoanService],
  controllers: [LoanController],
})
export class LoanModule {}