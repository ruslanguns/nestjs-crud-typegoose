import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { BaseService } from '../../core/abstracts';
import { Product } from './product.model';

@Injectable()
export class ProductService extends BaseService<Product> {
    constructor(
        @InjectModel(Product.modelName) private readonly productModel: ReturnModelType<typeof Product>
    ) {
        super(productModel)
    }
}
