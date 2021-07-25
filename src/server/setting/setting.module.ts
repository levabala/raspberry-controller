import { Module } from '@nestjs/common';
import { SettingService } from './setting.service';
import { SettingResolver } from './setting.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SettingRepository } from './repositories';

@Module({
  imports: [TypeOrmModule.forFeature([SettingRepository])],
  providers: [TypeOrmModule, SettingResolver, SettingService],
})
export class SettingModule {}
