import { Controller, Get, Post, Body } from '@nestjs/common';
import { LoanService } from './loan.service';
import { LoanAccount } from './loan_account.entity';
import { LoanProduct } from './loan_product.entity';

@Controller('loans')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Post('products')
  async createProduct(@Body() data: Partial<LoanProduct>): Promise<LoanProduct> {
    return this.loanService.createLoanProduct(data);
  }

  @Post('accounts')
  async createAccount(@Body() data: Partial<LoanAccount>): Promise<LoanAccount> {
    return this.loanService.createLoanAccount(data);
  }

  @Get('products')
  async getAllProducts(): Promise<LoanProduct[]> {
    return this.loanService.getAllProducts();
  }

  @Get('accounts')
  async getAllAccounts(): Promise<LoanAccount[]> {
    return this.loanService.getAllAccounts();
  }
}