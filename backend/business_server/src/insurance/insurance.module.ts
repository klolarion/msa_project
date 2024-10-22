import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InsuranceClaimController } from './insurance_claim.controller';
import { InsuranceClaim } from './insurance_claim.entity';
import { InsuranceClaimService } from './insurance_claim.service';
import { InsurancePolicyController } from './insurance_policy.controller';
import { InsurancePolicy } from './insurance_policy.entity';
import { InsurancePolicyService } from './insurance_policy.service';

@Module({
  imports: [TypeOrmModule.forFeature([InsurancePolicy, InsuranceClaim])],
  providers: [InsurancePolicyService, InsuranceClaimService],
  controllers: [InsurancePolicyController, InsuranceClaimController],
})
export class InsuranceModule {}