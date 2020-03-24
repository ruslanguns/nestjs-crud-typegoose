import { Controller, Post, Body } from '@nestjs/common';
import { abstractControllerFactory } from '../../core/abstracts/controllers/abstract.controller';
import { Entry } from './entry.model';
import { EntriesService } from './entries.service';
import { CreateEntryDto } from './dtos/create-entry.dto';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { EditEntryDto } from './dtos/edit-entry.dto';

export class TestDTO {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}

const BaseController = abstractControllerFactory<Entry, CreateEntryDto, EditEntryDto>({
    model: Entry,
    createDto: CreateEntryDto,
    editDto: EditEntryDto
})

@Controller('entries')
export class EntriesController extends BaseController {
    constructor(private readonly _entriesService: EntriesService) {
        super(_entriesService)
    }

    @Post('test')
    async createTest(@Body() dto: TestDTO) {
        return 'Esto esta correcto'
    }
}
