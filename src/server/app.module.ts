import { ViewModule } from './view/view.module';
import { getConnectionOptions } from 'typeorm';
import { SettingModule } from './setting/setting.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ViewModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        const options = await getConnectionOptions();

        return {
          ...options,
          keepConnectionAlive: true,
          autoLoadEntities: true,
        };
      },
    }),
    SettingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
