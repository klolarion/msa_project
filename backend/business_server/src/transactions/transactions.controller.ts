import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  async createTransaction(
    @Body('accountId') accountId: number,
    @Body('amount') amount: number,
    @Body('type') type: string,
  ) {
    return await this.transactionsService.createTransaction(accountId, amount, type);
  }

  @Get(':accountId')
  async getTransactionsByAccountId(@Param('accountId') accountId: number) {
    return await this.transactionsService.getTransactionsByAccountId(accountId);
  }
}
