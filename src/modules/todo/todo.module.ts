import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Todo.name, schema: Todo.schema }
        ])
    ],
    providers: [TodoService],
    controllers: [TodoController]
})
export class TodoModule { }
