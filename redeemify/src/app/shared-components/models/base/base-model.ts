export class BaseModel<T> {

  createdAt?: string = "";
  updatedAt?: string = "";
  
  cloneObject(object: T): T {
    return JSON.parse(JSON.stringify(object)) as T
  }

  isDataPresent(callback: Function): boolean {
    return !!callback()
  }

}