

export interface IBaseRepository<T, V> {

    save: (entity: T) => T;

    findById: (param: V ) => V; 

    findAll: (params: V) => T[];

    delete: (param: V) => void;
}