
export interface AbstractControllerOptions<T, C, E> {
    model: { new(doc?: any): T },
    createDto: { new(): C },
    editDto: { new(): E },
}
