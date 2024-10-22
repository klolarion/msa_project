import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BankTransaction } from './bank_transaction.entity';
import { BankAccount } from '../bank/bank_account.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(BankTransaction)
    private transactionsRepository: Repository<BankTransaction>,
    @InjectRepository(BankAccount)
    private accountsRepository: Repository<BankAccount>,
  ) {}

  // 이체 트랜잭션 생성
  async createTransfer(
    fromAccountId: number,
    toAccountId: number,
    amount: number,
    toBankName: string,
    toAccountNumber: string,
    description?: string,
  ): Promise<BankTransaction> {
    const fromAccount = await this.accountsRepository.findOneBy({ id: fromAccountId });
    const toAccount = await this.accountsRepository.findOneBy({ id: toAccountId });

    if (!fromAccount) throw new BadRequestException('Sender account not found.');
    if (!toAccount) throw new BadRequestException('Receiver account not found.');
    if (fromAccount.balance < amount) {
      throw new BadRequestException('Insufficient balance.');
    }

    const fromBeforeBalance = fromAccount.balance;
    const toBeforeBalance = toAccount.balance;

    fromAccount.balance -= amount;
    toAccount.balance += amount;

    const fromAfterBalance = fromAccount.balance;
    const toAfterBalance = toAccount.balance;

    await this.accountsRepository.save([fromAccount, toAccount]);

    const newTransaction = this.transactionsRepository.create({
      fromAccount,
      toAccount,
      toBankName,
      toAccountNumber,
      amount,
      beforeBalance: fromBeforeBalance,
      afterBalance: fromAfterBalance,
      transactionType: 'Transfer',
      description,
      status: 'completed',
    });

    return await this.transactionsRepository.save(newTransaction);
  }

  // 내 전체 트랜잭션 조회 (사용자의 모든 트랜잭션)
  async findMyTransactions(userId: string): Promise<BankTransaction[]> {
    return await this.transactionsRepository.find({
      where: [
        { fromAccount: { memberId: userId } },
        { toAccount: { memberId: userId } },
      ],
      relations: ['fromAccount', 'toAccount'],
    });
  }

  // 내 계좌별 트랜잭션 조회
  async findMyAccountTransactions(userId: string, accountId: number): Promise<BankTransaction[]> {
    return await this.transactionsRepository.find({
      where: [
        { fromAccount: { id: accountId, memberId: userId } },
        { toAccount: { id: accountId, memberId: userId } },
      ],
      relations: ['fromAccount', 'toAccount'],
    });
  }

  // 특정 트랜잭션 조회
  async findOne(id: number): Promise<BankTransaction> {
    const transaction = await this.transactionsRepository.findOne({
      where: { id },
      relations: ['fromAccount', 'toAccount'],
    });
    if (!transaction) throw new BadRequestException('BankTransaction not found.');
    return transaction;
  }
}