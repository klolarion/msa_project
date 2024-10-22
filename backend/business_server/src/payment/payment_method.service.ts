import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentMethod } from './payment_method.entity';

@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectRepository(PaymentMethod)
    private paymentMethodRepository: Repository<PaymentMethod>,
  ) {}

  async createPaymentMethod(data: Partial<PaymentMethod>): Promise<PaymentMethod> {
    const paymentMethod = this.paymentMethodRepository.create(data);
    return this.paymentMethodRepository.save(paymentMethod);
  }

  async findAll(): Promise<PaymentMethod[]> {
    return this.paymentMethodRepository.find();
  }
}