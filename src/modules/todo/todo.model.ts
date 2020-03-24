import { BaseModel } from '../../core/abstracts/models/base.model';
import { prop } from '@typegoose/typegoose';
export class Todo extends BaseModel {
    @prop({ required: true })
    description!: string;

    @prop({ default: false, type: Boolean })
    status: boolean;
}