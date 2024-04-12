import {
  Controller,
  Post,
  Get,
  Put,
  Body,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { WorkersService } from '../services/users.service';
import { WorkerDto } from 'src/dto/user.dto';

/**
 * Controller for managing workers.
 * Handles HTTP requests related to workers operations including adding, retrieving, and updating worker information.
 */
@Controller('workers')
export class WorkersController {
  constructor(private readonly workersService: WorkersService) {}

  /**
   * Adds a new worker to the database.
   * @param {WorkerDto} newWorker - The worker data transfer object containing the information to create a new worker.
   * @returns {Promise<object>} A response object containing the status, message, and worker data.
   * @throws {HttpException} When an email already exists or other server errors occur.
   */
  @Post('add')
  async addWorker(@Body() newWorker: WorkerDto) {
    try {
      const worker = await this.workersService.createWorker(newWorker);
      return {
        status: 'success',
        message: 'Worker successfully added',
        data: worker,
      };
    } catch (error) {
      if (error?.code === 11000 && error?.keyPattern?.email) {
        throw new HttpException(
          {
            status: 'error',
            message:
              'This email is already in use. Please use a different email.',
            data: {},
          },
          HttpStatus.BAD_REQUEST,
        );
      } else {
        throw new HttpException(
          {
            status: 'error',
            message: error.message || 'Failed to add worker',
            data: {},
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  /**
   * Retrieves all workers from the database.
   * @returns {Promise<WorkerDto[]>} An array of all worker data transfer objects.
   */
  @Get('get')
  async getAllWorkers() {
    return this.workersService.getAllWorkers();
  }

  /**
   * Updates an existing worker's information in the database.
   * @param {string} workerId - The ID of the worker to update.
   * @param {WorkerDto} worker - The updated information of the worker.
   * @returns {Promise<object>} The updated worker data.
   * @throws {NotFoundException} When the worker with the specified ID is not found.
   */
  @Put(':id')
  async updateWorker(@Param('id') workerId: string, @Body() worker: WorkerDto) {
    const updatedWorker = await this.workersService.updateWorker(
      workerId,
      worker,
    );
    return updatedWorker;
  }
}
