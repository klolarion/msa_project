import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './account.entity';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
  ) {}

  async createAccount(memberId: string, accountNumber: string) {
    const account = this.accountRepository.create({ memberId, accountNumber });
    return this.accountRepository.save(account);
  }

  async getAccountByNumber(accountNumber: string) {
    return this.accountRepository.findOne({ where: { accountNumber } });
  }
}
