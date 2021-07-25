import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const tableName = 'settings.setting';

export class AlterTableSettingOnSchemaSettings1627209954494
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: tableName,
        columns: [
          {
            name: 'sid',
            type: 'uuid',
            isNullable: false,
            isPrimary: true,
            default: 'uuid_generate_v4()',
            comment: 'identifier',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
            isUnique: true,
            comment: 'setting name',
          },
          {
            name: 'value',
            type: 'boolean',
            isNullable: false,
            comment: 'setting value (on/off)',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            isNullable: false,
            default: 'now()',
            comment: 'create date',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            isNullable: false,
            default: 'now()',
            comment: 'update date',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(tableName);
  }
}
