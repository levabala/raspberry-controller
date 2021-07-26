import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SettingService } from './setting.service';
import { SettingEntity } from './entities/setting.entity';
import { UpdateSettingInput } from './dto/update-setting.input';

@Resolver(() => SettingEntity)
export class SettingResolver {
  constructor(private readonly settingsService: SettingService) {}

  @Query(() => [SettingEntity], { name: 'settings' })
  findAll() {
    return this.settingsService.findAll();
  }

  @Query(() => SettingEntity, { name: 'setting' })
  findOne(@Args('name', { type: () => String }) name: string) {
    return this.settingsService.findOne(name);
  }

  @Mutation(() => SettingEntity)
  updateSetting(
    @Args('updateSettingInput') updateSettingInput: UpdateSettingInput,
  ) {
    return this.settingsService.update(
      updateSettingInput.name,
      updateSettingInput,
    );
  }
}
