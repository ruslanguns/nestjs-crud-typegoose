import { BaseModel } from '../../core/abstracts';
import { prop } from '@typegoose/typegoose';
export class Product extends BaseModel {

    @prop()
    name?: string;

    @prop()
    description?: string;

    @prop()
    price?: number;
}
