import { Injectable } from '@nestjs/common';
import { BaseService } from '../core/database/base.service';
import { Product } from './product.model';
import { InjectModel } from '@nestjs/mongoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class ProductService extends BaseService<Product> {
    constructor(
        @InjectModel(Product.modelName) private readonly productModel: ReturnModelType<typeof Product>
    ) {
        super(productModel)
    }
}
