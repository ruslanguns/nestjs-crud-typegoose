import { DocumentType, ReturnModelType } from '@typegoose/typegoose';

export abstract class AbstractCoreService<T> {
    public abstract async findAllAsync(): Promise<Array<DocumentType<T>>>;
    public abstract async findByIdAsync(id: string): Promise<DocumentType<T>>;
    public abstract async create(item: T): Promise<DocumentType<T>>;
    public abstract async deleteByIdAsync(id: string): Promise<DocumentType<T>>;
    public abstract async updateAsync(item: T): Promise<DocumentType<T>>;
    public abstract async countAsync(): Promise<number>;
}