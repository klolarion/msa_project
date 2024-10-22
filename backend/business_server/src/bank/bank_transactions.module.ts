import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsService } from './bank_transactions.service';
import { TransactionsController } from './bank_transactions.controller';
import { BankTransaction } from './bank_transaction.entity'; // 거래 엔티티
import { BankAccount } from '../bank/bank_account.entity'; // 계좌 엔티티
import { AccountsController } from './bank_accounts.controller';
import { AccountsService } from './bank_accounts.service';

@Module({
  imports: [TypeOrmModule.forFeature([BankTransaction, BankAccount])], // 엔티티 등록
  providers: [TransactionsService], // 서비스 등록
  controllers: [TransactionsController],
  exports: [TransactionsService], // 다른 모듈에서 사용할 경우 export
})
export class TransactionsModule {}
