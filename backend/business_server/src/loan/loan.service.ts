import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoanAccount } from './loan_account.entity';
import { LoanProduct } from './loan_product.entity';

@Injectable()
export class LoanService {
  constructor(
    @InjectRepository(LoanProduct) private productRepository: Repository<LoanProduct>,
    @InjectRepository(LoanAccount) private accountRepository: Repository<LoanAccount>,
  ) {}

  async createLoanProduct(data: Partial<LoanProduct>): Promise<LoanProduct> {
    const product = this.productRepository.create(data);
    return this.productRepository.save(product);
  }

  async createLoanAccount(data: Partial<LoanAccount>): Promise<LoanAccount> {
    const account = this.accountRepository.create(data);
    return this.accountRepository.save(account);
  }

  async getAllProducts(): Promise<LoanProduct[]> {
    return this.productRepository.find({ relations: ['loanAccounts'] });
  }

  async getAllAccounts(): Promise<LoanAccount[]> {
    return this.accountRepository.find({ relations: ['product'] });
  }
}