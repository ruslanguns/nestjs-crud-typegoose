import { Get, Param, Put, Post, Body, Delete } from '@nestjs/common';
import { AbstractControllerOptions } from '../../interfaces/abstract-controller-options.interface';
import { AbstractCoreService } from '../services/abstract-core.service';

export function abstractControllerFactory<T>(
    options: AbstractControllerOptions<T>
): any {
    // Dotamos al modelo de configuración base de rutas
    const model = options.model;

    abstract class AbstractController {
        protected readonly _service: AbstractCoreService<T>;

        protected constructor(service: AbstractCoreService<T>) {
            this._service = service;
        }

        @Get()
        async find(): Promise<T[]> { // TODO: Pagination or query details also should be sent to abstract core service
            return await this._service.findAllAsync();
        }


        @Get('count')
        async count(): Promise<number> {
            return await this._service.countAsync();
        }

        @Get(':id') // FIXME: Add validation pipe for MongoID
        async findById(@Param('id') id: string): Promise<T> {
            return await this._service.findByIdAsync(id);
        }

        @Post() // FIXME: Added dynamic typing DTOs as ANY meanwhile IMPORTANT!
        async create(@Body() dto: any): Promise<T> {
            return await this._service.create(dto);
        }

        @Put()
        async update(@Body() dto: any): Promise<T> {
            return await this._service.updateAsync(dto);
        }

        @Delete(':id') // FIXME: Add validation pipe for MongoID
        async delete(@Param('id') id: string): Promise<T> {
            return await this._service.deleteByIdAsync(id);
        }

    }

    return AbstractController;
}