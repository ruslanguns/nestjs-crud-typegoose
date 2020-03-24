import { Injectable } from '@nestjs/common';
import { BaseService } from '../../core/abstracts/services/base.service';
import { Contact } from './contact.model';
import { InjectModel } from '@nestjs/mongoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class ContactsService extends BaseService<Contact> {
    constructor(
        @InjectModel(Contact.name) private readonly contactModel: ReturnModelType<typeof Contact>
    ) {
        super(contactModel);
    }
}
