import { Controller } from '@nestjs/common';
import { abstractControllerFactory } from '../../core/abstracts/controllers/abstract.controller';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

const BaseController = abstractControllerFactory<Todo>({ model: Todo })

@Controller('todo')
export class TodoController extends BaseController {
    constructor(private readonly todoService: TodoService) {
        super(todoService);
    }
}
