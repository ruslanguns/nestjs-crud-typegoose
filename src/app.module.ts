import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { EntriesModule, ProductModule } from './modules';
@Module({
    imports: [
        CoreModule,
        EntriesModule,
        ProductModule,
    ],
})
export class AppModule { }
