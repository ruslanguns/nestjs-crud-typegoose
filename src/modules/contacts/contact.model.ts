import { BaseModel } from '../../core/abstracts/models/base.model';
import { prop } from '@typegoose/typegoose';


export class Contact extends BaseModel {
    @prop({ required: true, maxlength: 30 })
    name!: string;

    @prop({ maxlength: 50 })
    lastname: string;
}
