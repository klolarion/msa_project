import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccount } from './bank_account.entity';
import { AccountsController } from './bank_accounts.controller';
import { AccountsService } from './bank_accounts.service';

@Module({
  imports: [TypeOrmModule.forFeature([BankAccount])],
  providers: [AccountsService],
  controllers: [AccountsController],
})
export class AccountsModule {}