import { DefaultAbstractControllerOptions } from './default-abstract-controller-options.interface';

export interface AbstractControllerOptions<T> {
    model: { new(doc?: any): T };
}

export interface AbstractControllerDefautOptions<T>
    extends AbstractControllerOptions<T> {
    auth: DefaultAbstractControllerOptions | boolean;
}