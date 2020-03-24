import { Controller } from '@nestjs/common';
import { abstractControllerFactory } from '../../core/abstracts/controllers/abstract.controller';
import { Entry } from './entry.model';
import { EntriesService } from './entries.service';

const BaseController = abstractControllerFactory<Entry>({ model: Entry })

@Controller('entries')
export class EntriesController extends BaseController {
    constructor(private readonly entriesService: EntriesService) {
        super(entriesService)
    }
}
