import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'setting', schema: 'settings' })
export class SettingEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  sid: string;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'value' })
  value: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @CreateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
