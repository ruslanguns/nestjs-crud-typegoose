import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { ProductModule, TodoModule, ContactsModule } from './modules';
import { EntriesModule } from './modules/entries/entries.module';
@Module({
    imports: [
        CoreModule,
        EntriesModule,
        // ContactsModule,
        // ProductModule,
        // TodoModule,
    ],
})
export class AppModule { }
