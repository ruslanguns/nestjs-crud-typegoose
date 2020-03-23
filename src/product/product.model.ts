import { BaseModel } from '../core/database/base.model';
import { prop } from '@typegoose/typegoose';
export class Product extends BaseModel {

    @prop()
    name: string;

    @prop()
    description: string;

    @prop()
    price: number;
}
