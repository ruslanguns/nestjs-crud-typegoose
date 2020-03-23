import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoreModule } from './core/core.module';
import { ProductModule } from './product/product.module';
@Module({
    imports: [
        CoreModule,
        ProductModule,
    ],
})
export class AppModule { }
