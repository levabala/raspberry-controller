import { InputType, PartialType } from '@nestjs/graphql';
import { SettingEntity } from '../entities';

@InputType()
export class UpdateSettingInput extends PartialType(SettingEntity) {
  name: string;
  value: boolean;
}
