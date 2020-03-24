import { Controller } from '@nestjs/common';
import { abstractControllerFactory } from '../../core/abstracts/controllers/abstract.controller';
import { Contact } from './contact.model';
import { ContactsService } from './contacts.service';

const BaseController = abstractControllerFactory<Contact>({ model: Contact });

@Controller('contacts')
export class ContactsController extends BaseController {
    constructor(private readonly _contactsService: ContactsService) {
        super(_contactsService)
    }
}
