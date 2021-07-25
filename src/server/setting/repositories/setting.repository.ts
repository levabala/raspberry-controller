import { EntityRepository } from 'typeorm';

import { BaseRepository } from 'Server/repositories';

import { SettingEntity } from '../entities';

@EntityRepository(SettingEntity)
export class SettingRepository extends BaseRepository<SettingEntity> {}
