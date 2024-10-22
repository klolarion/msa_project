import { Controller, Get, Post, Param, Body, Patch } from '@nestjs/common';
import { BankAccount } from './bank_account.entity';
import { AccountsService } from './bank_accounts.service';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  // 계좌 생성
  @Post()
  async create(@Body() accountData: Partial<BankAccount>): Promise<BankAccount> {
    return this.accountsService.createAccount(accountData);
  }

  // 모든 계좌 조회
  @Get()
  async findAll(): Promise<BankAccount[]> {
    return this.accountsService.findAll();
  }

  // 특정 계좌 조회
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<BankAccount> {
    return this.accountsService.findOne(id);
  }

  // 계좌 잔액 업데이트
  @Patch(':id/balance')
  async updateBalance(
    @Param('id') id: number,
    @Body('balance') balance: number,
  ): Promise<BankAccount> {
    return this.accountsService.updateBalance(id, balance);
  }
}