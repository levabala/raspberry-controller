import { Injectable } from '@nestjs/common';
import { UpdateSettingInput } from './dto/update-setting.input';
import { SettingRepository } from './repositories';

@Injectable()
export class SettingService {
  constructor(private readonly settingsRepository: SettingRepository) {}

  findAll() {
    return this.settingsRepository.find();
  }

  findOne(name: string) {
    return this.settingsRepository.findOne({ name });
  }

  update(name: string, updateSettingInput: UpdateSettingInput) {
    return this.settingsRepository.update({ name }, updateSettingInput);
  }
}
