import { Injectable } from '@nestjs/common';
import { BaseService } from '../../core/abstracts/services/base.service';
import { InjectModel } from '@nestjs/mongoose';
import { Entry } from './entry.model';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class EntriesService extends BaseService<Entry> {
    constructor(
        @InjectModel(Entry.name) private readonly entryModel: ReturnModelType<typeof Entry>
    ) {
        super(entryModel)
    }
}
