const path = require('path');

module.exports = {
  database: process.env.POSTGRES_DB,
  entities: process.env.NODE_PATH && [
    path.join(process.env.NODE_PATH, 'server', '**', 'entities', '*'),
  ],
  migrations: process.env.NODE_PATH && [
    path.join(process.env.NODE_PATH, 'server', 'migrations', '*'),
  ],
  cli: {
    migrationsDir: 'src/server/migrations',
  },
  host: process.env.POSTGRES_HOST,
  logging: process.env.TYPEORM_LOGGING === 'true',
  migrationsRun: process.env.MIGRATION_RUN === 'true',
  password: process.env.POSTGRES_PASSWORD,
  port: Number(process.env.POSTGRES_PORT),
  synchronize: false,
  type: 'postgres',
  username: process.env.POSTGRES_USER,
  maxQueryExecutionTime:
    Number(process.env.POSTGRES_MAX_QUERY_EXECUTION_TIME) || 500,
};
