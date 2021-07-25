import { QueryRunner, Repository } from 'typeorm';

export abstract class BaseRepository<TEntity> extends Repository<TEntity> {
  public async startTransaction(): Promise<QueryRunner> {
    const queryRunner = this.manager.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    return queryRunner;
  }
}
