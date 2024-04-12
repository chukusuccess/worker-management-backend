import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkersService } from './services/users.service';
import { WorkersController } from './controllers/users.controller';
import { MitarbeiterSchema } from './models/user.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Mitarbeiter', schema: MitarbeiterSchema },
    ]),
  ],
  controllers: [WorkersController],
  providers: [WorkersService],
})
export class WorkersModule {}
