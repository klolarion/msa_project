import { Controller, Get, Post, Body } from '@nestjs/common';
import { InsuranceClaim } from './insurance_claim.entity';
import { InsuranceClaimService } from './insurance_claim.service';

@Controller('insurance-claims')
export class InsuranceClaimController {
  constructor(private readonly claimService: InsuranceClaimService) {}

  @Post()
  async create(@Body() data: Partial<InsuranceClaim>): Promise<InsuranceClaim> {
    return this.claimService.createClaim(data);
  }

  @Get()
  async findAll(): Promise<InsuranceClaim[]> {
    return this.claimService.findAll();
  }
}