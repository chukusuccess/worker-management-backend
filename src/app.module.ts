import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './db.module';
import { WorkersModule } from './users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // This makes the .env variables available globally
    }),
    DatabaseModule,
    WorkersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
