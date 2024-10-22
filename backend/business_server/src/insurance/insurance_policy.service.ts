import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InsurancePolicy } from './insurance_policy.entity';

@Injectable()
export class InsurancePolicyService {
  constructor(
    @InjectRepository(InsurancePolicy)
    private policyRepository: Repository<InsurancePolicy>,
  ) {}

  async createPolicy(data: Partial<InsurancePolicy>): Promise<InsurancePolicy> {
    const policy = this.policyRepository.create(data);
    return this.policyRepository.save(policy);
  }

  async findAll(): Promise<InsurancePolicy[]> {
    return this.policyRepository.find({ relations: ['claims'] });
  }
}