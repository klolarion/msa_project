import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentMethod } from 'src/payment/payment_method.entity';
import { Repository } from 'typeorm';
import { PaymentTransaction } from './payment_transaction.entity';

@Injectable()
export class PaymentTransactionService {
  constructor(
    @InjectRepository(PaymentTransaction)
    private transactionRepository: Repository<PaymentTransaction>,
    @InjectRepository(PaymentMethod)
    private paymentMethodRepository: Repository<PaymentMethod>,
  ) {}

  async createTransaction(
    paymentMethodId: number,
    amount: number,
    currency: string,
    description?: string,
  ): Promise<PaymentTransaction> {
    const paymentMethod = await this.paymentMethodRepository.findOneBy({ id: paymentMethodId });
    if (!paymentMethod) {
      throw new Error('Payment method not found');
    }

    const transaction = this.transactionRepository.create({
      paymentMethod,
      amount,
      currency,
      description,
    });

    return this.transactionRepository.save(transaction);
  }

  async findAll(): Promise<PaymentTransaction[]> {
    return this.transactionRepository.find({ relations: ['paymentMethod'] });
  }
}