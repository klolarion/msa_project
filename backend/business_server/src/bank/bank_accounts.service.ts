import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BankAccount } from './bank_account.entity';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(BankAccount)
    private accountsRepository: Repository<BankAccount>,
  ) {}

  // 계좌 생성
  async createAccount(accountData: Partial<BankAccount>): Promise<BankAccount> {
    const newAccount = this.accountsRepository.create(accountData);
    return await this.accountsRepository.save(newAccount);
  }

  // 모든 계좌 조회
  async findAll(): Promise<BankAccount[]> {
    return await this.accountsRepository.find({ relations: ['transactions'] });
  }

  // 특정 계좌 조회
  async findOne(id: number): Promise<BankAccount> {
    return await this.accountsRepository.findOne({
      where: { id },
      relations: ['transactions'],
    });
  }

  // 계좌 잔액 업데이트
  async updateBalance(id: number, balance: number): Promise<BankAccount> {
    const account = await this.findOne(id);
    account.balance = balance;
    return await this.accountsRepository.save(account);
  }
}