import { Controller, Get, Post, Body } from '@nestjs/common';
import { InsurancePolicy } from './insurance_policy.entity';
import { InsurancePolicyService } from './insurance_policy.service';

@Controller('insurance-policies')
export class InsurancePolicyController {
  constructor(private readonly policyService: InsurancePolicyService) {}

  @Post()
  async create(@Body() data: Partial<InsurancePolicy>): Promise<InsurancePolicy> {
    return this.policyService.createPolicy(data);
  }

  @Get()
  async findAll(): Promise<InsurancePolicy[]> {
    return this.policyService.findAll();
  }
}