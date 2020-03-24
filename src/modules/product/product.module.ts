import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product } from './product.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Product.modelName, schema: Product.schema }
        ])
    ],
    providers: [ProductService],
    controllers: [ProductController],
})
export class ProductModule { }
