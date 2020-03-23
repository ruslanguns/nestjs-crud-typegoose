import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { ProductModule } from './product/product.module';
@Module({
    imports: [
        CoreModule,
        ProductModule,
    ],
})
export class AppModule { }
