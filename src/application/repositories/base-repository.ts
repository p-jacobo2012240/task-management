
export interface IBaseRepository<T, V> {

    save(domain: T) : Promise<T>;

    findById(param: V ) : Promise<T>; 

    findAll(params: V) : Array<T>;

    delete(param: V) : void;
}