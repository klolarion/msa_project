import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InsuranceClaim } from './insurance_claim.entity';

@Injectable()
export class InsuranceClaimService {
  constructor(
    @InjectRepository(InsuranceClaim)
    private claimRepository: Repository<InsuranceClaim>,
  ) {}

  async createClaim(data: Partial<InsuranceClaim>): Promise<InsuranceClaim> {
    const claim = this.claimRepository.create(data);
    return this.claimRepository.save(claim);
  }

  async findAll(): Promise<InsuranceClaim[]> {
    return this.claimRepository.find({ relations: ['policy'] });
  }
}