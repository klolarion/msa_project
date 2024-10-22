import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';
import { TransactionsService } from './bank_transactions.service';
import { BankTransaction } from './bank_transaction.entity';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  // 이체 트랜잭션 생성
  @Post('transfer')
  async createTransfer(
    @Body('fromAccountId') fromAccountId: number,
    @Body('toAccountId') toAccountId: number,
    @Body('amount') amount: number,
    @Body('toBankName') toBankName: string,
    @Body('toAccountNumber') toAccountNumber: string,
    @Body('description') description?: string,
  ): Promise<BankTransaction> {
    return this.transactionsService.createTransfer(
      fromAccountId,
      toAccountId,
      amount,
      toBankName,
      toAccountNumber,
      description,
    );
  }

  // 내 전체 트랜잭션 조회 (사용자의 모든 트랜잭션)
  @Get('my-transactions/:userId')
  async findMyTransactions(@Param('userId') userId: string): Promise<BankTransaction[]> {
    return this.transactionsService.findMyTransactions(userId);
  }

  // 내 계좌별 트랜잭션 조회
  @Get('my-account/:userId/:accountId')
  async findMyAccountTransactions(
    @Param('userId') userId: string,
    @Param('accountId') accountId: number,
  ): Promise<BankTransaction[]> {
    return this.transactionsService.findMyAccountTransactions(userId, accountId);
  }

  // 특정 트랜잭션 조회
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<BankTransaction> {
    return this.transactionsService.findOne(id);
  }
}