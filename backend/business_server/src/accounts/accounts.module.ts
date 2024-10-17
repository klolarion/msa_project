import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { Account } from './account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Account])], // 엔티티 등록
  providers: [AccountsService], // 서비스 등록
  controllers: [AccountsController],
  exports: [AccountsService], // 다른 모듈에서 사용할 경우를 대비해 export
})
export class AccountsModule {}
