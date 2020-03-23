import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.model';

class CreateProductDto {
    id?: string;
    name: string;
    description: string;
    price: number;
}

@Controller('product')
export class ProductController {
    constructor(
        private readonly productService: ProductService,
    ) { }

    @Get()
    async getProducts(): Promise<Product[]> {
        return this.productService.findAllAsync();
    }

    @Get(':productId')
    async getProductById(
        @Param('productId') productId: string,
    ): Promise<Product[]> {
        return await this.productService.findByIdAsync(productId);
    }

    @Post()
    async createProduct(
        @Body() dto: CreateProductDto,
    ): Promise<Product> {
        return await this.productService.create(dto);
    }

    @Delete(':productId')
    async deleteProduct(
        @Param('productId') productId: string,
    ): Promise<Product> {
        return await this.productService.deleteById(productId);
    }

    @Put()
    async editProduct(
        @Body() dto: CreateProductDto,
    ): Promise<Product> {
        return await this.productService.updateAsync(dto);
    }
}
