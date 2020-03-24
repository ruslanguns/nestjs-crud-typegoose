import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Contact } from './contact.model';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Contact.name, schema: Contact.schema }
        ])
    ],
    providers: [ContactsService],
    controllers: [ContactsController]
})
export class ContactsModule { }
