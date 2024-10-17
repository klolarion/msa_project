import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
  ) {}

  async createTransaction(accountId: number, amount: number, type: string) {
    const transaction = this.transactionRepository.create({
      account: { id: accountId },
      amount,
      transactionType: type,
    });
    return await this.transactionRepository.save(transaction);
  }

  async getTransactionsByAccountId(accountId: number) {
    return await this.transactionRepository.find({
      where: { account: { id: accountId } },
    });
  }
}
