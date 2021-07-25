import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSchemaSettings1627209915061 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createSchema('settings');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropSchema('settings');
  }
}
