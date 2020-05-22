import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { VoteModule } from './vote/vote.module';
import { DatabaseModule } from './database/database.module';

const environment = process.env.NODE_ENV || 'development';
type MongoDBType = 'mongodb';

@Module({
  imports: [VoteModule, 
    DatabaseModule,

  ConfigModule.forRoot({
    envFilePath: `.env.${environment}`,
    isGlobal: true,
  }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
