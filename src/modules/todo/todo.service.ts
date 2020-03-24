import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './todo.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { BaseService } from '../../core/abstracts/services/base.service';

@Injectable()
export class TodoService extends BaseService<Todo> {
    constructor(
        @InjectModel(Todo.modelName) private readonly todoModel: ReturnModelType<typeof Todo>
    ) {
        super(todoModel)
    }
}
