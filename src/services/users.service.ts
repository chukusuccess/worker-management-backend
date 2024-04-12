import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Mitarbeiter } from '../models/user.model';
import { WorkerDto } from 'src/dto/user.dto';

@Injectable()
export class WorkersService {
  constructor(
    @InjectModel('Mitarbeiter')
    private readonly mitarbeiterModel: Model<Mitarbeiter>,
  ) {}

  async createWorker(newWorker: WorkerDto): Promise<Mitarbeiter> {
    const values = new this.mitarbeiterModel({
      ...newWorker,
      // TODO: calc lvl2 and lvl3 based on broughtByLvl1
    });
    const response = await values.save();
    return response;
  }

  async getAllWorkers(): Promise<Mitarbeiter[]> {
    const workers = await this.mitarbeiterModel.find().exec();
    return workers;
  }

  async updateWorker(
    workerId: string,
    worker: WorkerDto,
  ): Promise<Mitarbeiter> {
    const values = await this.mitarbeiterModel.findById(workerId);

    if (!values) {
      throw new NotFoundException(`Worker with ID ${workerId} not found.`);
    }

    // TODO: calc lv2 and 3 if need be
    Object.assign(values, worker);

    const updatedWorker = await values.save();
    return updatedWorker;
  }
}
