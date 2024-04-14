// database.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb+srv://${configService.get('MONGO_DB_USER')}:${configService.get('MONGO_DB_PASS')}@workermanagementsystem.x1iewoi.mongodb.net/workerManagement?retryWrites=true&w=majority&appName=WorkerManagementSystem`,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
