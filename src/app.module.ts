import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { ProductModule, TodoModule, ContactsModule } from './modules';
@Module({
    imports: [
        CoreModule,
        ContactsModule,
        ProductModule,
        TodoModule,
    ],
})
export class AppModule { }
