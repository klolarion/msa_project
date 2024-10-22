import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentMethod } from './payment_method.entity';
import { PaymentTransaction } from './payment_transaction.entity';
import { PaymentMethodService } from './payment_method.service';
import { PaymentMethodController } from './payment_method.controller';
import { PaymentTransactionService } from './payment_transaction.service';
import { PaymentTransactionController } from './payment_transaction.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentMethod, PaymentTransaction])],
  providers: [PaymentMethodService, PaymentTransactionService],
  controllers: [PaymentMethodController, PaymentTransactionController],
})
export class PaymentModule {}