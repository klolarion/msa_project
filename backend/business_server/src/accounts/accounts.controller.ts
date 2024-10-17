import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  async createAccount(
    @Body('memberId') memberId: string,
    @Body('accountNumber') accountNumber: string,
  ) {
    return this.accountsService.createAccount(memberId, accountNumber);
  }

  @Get(':accountNumber')
  async getAccountByNumber(@Param('accountNumber') accountNumber: string) {
    return this.accountsService.getAccountByNumber(accountNumber);
  }
}
