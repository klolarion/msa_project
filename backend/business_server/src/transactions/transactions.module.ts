import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { Transaction } from './transaction.entity'; // 거래 엔티티
import { Account } from '../accounts/account.entity'; // 계좌 엔티티

@Module({
  imports: [TypeOrmModule.forFeature([Transaction, Account])], // 엔티티 등록
  providers: [TransactionsService], // 서비스 등록
  controllers: [TransactionsController],
  exports: [TransactionsService], // 다른 모듈에서 사용할 경우 export
})
export class TransactionsModule {}
