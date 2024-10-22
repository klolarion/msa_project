import { Controller, Get, Post, Body } from '@nestjs/common';
import { PaymentTransaction } from './payment_transaction.entity';
import { PaymentTransactionService } from './payment_transaction.service';

@Controller('payment-transactions')
export class PaymentTransactionController {
  constructor(private readonly transactionService: PaymentTransactionService) {}

  @Post()
  async create(
    @Body('paymentMethodId') paymentMethodId: number,
    @Body('amount') amount: number,
    @Body('currency') currency: string,
    @Body('description') description?: string,
  ): Promise<PaymentTransaction> {
    return this.transactionService.createTransaction(
      paymentMethodId,
      amount,
      currency,
      description,
    );
  }

  @Get()
  async findAll(): Promise<PaymentTransaction[]> {
    return this.transactionService.findAll();
  }
}