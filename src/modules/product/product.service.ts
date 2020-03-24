import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { BaseService } from '../../core/abstracts';
import { Product } from './product.model';
import { CreateProductDto } from './dto/create-product.dto';
import { EditProductDto } from './dto/edit-product.dto';

@Injectable()
export class ProductService extends BaseService<Product, CreateProductDto, EditProductDto> {
    constructor(
        @InjectModel(Product.modelName) private readonly productModel: ReturnModelType<typeof Product>
    ) {
        super(productModel)
    }
}
