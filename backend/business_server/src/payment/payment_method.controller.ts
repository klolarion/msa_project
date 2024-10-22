import { Controller, Get, Post, Body } from '@nestjs/common';
import { PaymentMethodService } from './payment_method.service';
import { PaymentMethod } from './payment_method.entity';

@Controller('payment-methods')
export class PaymentMethodController {
  constructor(private readonly paymentMethodService: PaymentMethodService) {}

  @Post()
  async create(@Body() data: Partial<PaymentMethod>): Promise<PaymentMethod> {
    return this.paymentMethodService.createPaymentMethod(data);
  }

  @Get()
  async findAll(): Promise<PaymentMethod[]> {
    return this.paymentMethodService.findAll();
  }
}