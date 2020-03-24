import { BaseModel } from '../../core/abstracts/models/base.model';
import { prop } from '@typegoose/typegoose';
export class Entry extends BaseModel {
    @prop({ required: true })
    income: number;
}
