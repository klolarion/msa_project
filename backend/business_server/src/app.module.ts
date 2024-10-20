import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsModule } from './accounts/accounts.module';
import { TransactionsModule } from './transactions/transactions.module';
import { Account } from './accounts/account.entity';
import { Transaction } from './transactions/transaction.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'root',
      password: '123123',
      database: 'fintech_msa_db',
      entities: [Account, Transaction],
      synchronize: true,
    }),
    AccountsModule,
    TransactionsModule,
  ],
})
export class AppModule {}
