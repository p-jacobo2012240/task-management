
export interface IBaseRepository<T, V> {

    save(entity: T) : T;

    findById(param: V ) : T; 

    findAll(params: V) : Array<T>;

    delete(param: V) : void;
}