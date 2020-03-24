import { Module } from '@nestjs/common';
import { EntriesController } from './entries.controller';
import { EntriesService } from './entries.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Entry } from './entry.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Entry.name, schema: Entry.schema }
        ])
    ],
    controllers: [EntriesController],
    providers: [EntriesService]
})
export class EntriesModule { }
