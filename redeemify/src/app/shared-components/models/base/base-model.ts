export class BaseModel<T> {
  
  cloneObject(object: T): T {
    return JSON.parse(JSON.stringify(object)) as T
  }

}