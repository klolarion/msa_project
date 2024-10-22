import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsModule } from './bank/bank_accounts.module';
import { TransactionsModule } from './bank/bank_transactions.module';
import { LoanModule } from './loan/loan.module';
import { InsuranceModule } from './insurance/insurance.module';
import { PaymentModule } from './payment/payment.module';
import { InvestmentModule } from './investment/investment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'fintech_msa_db',
      entities: ["dist/**/*.entity.js"],
      synchronize: true,
    }),
    AccountsModule,
    TransactionsModule,
    InsuranceModule,
    LoanModule,
    PaymentModule,
    InvestmentModule,
    
  ],
})
export class AppModule {}
