import { DocumentType } from '@typegoose/typegoose';

export abstract class AbstractCoreService<T, C, E> {
    public abstract async findAllAsync(filter: {}): Promise<Array<DocumentType<T>>>;
    public abstract async findByIdAsync(id: string): Promise<DocumentType<T>>;
    public abstract async create(item: C): Promise<DocumentType<T>>;
    public abstract async deleteByIdAsync(id: string): Promise<DocumentType<T>>;
    public abstract async updateAsync(item: E): Promise<DocumentType<T>>;
    public abstract async countAsync(): Promise<number>;
}