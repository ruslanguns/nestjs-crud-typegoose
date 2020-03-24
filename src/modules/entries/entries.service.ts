import { Injectable } from '@nestjs/common';
import { BaseService } from '../../core/abstracts/services/base.service';
import { InjectModel } from '@nestjs/mongoose';
import { Entry } from './entry.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { CreateEntryDto } from './dtos/create-entry.dto';
import { EditEntryDto } from './dtos/edit-entry.dto';

@Injectable()
export class EntriesService extends BaseService<Entry, CreateEntryDto, EditEntryDto> {
    constructor(
        @InjectModel(Entry.name) private readonly entryModel: ReturnModelType<typeof Entry>
    ) {
        super(entryModel)
    }
}
