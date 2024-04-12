import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './db.module';
import { WorkersModule } from './users.module';

@Module({
  imports: [DatabaseModule, WorkersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
