export class BasePipeModel {
  key: string = "";
  options: BasePipeOptions = new BasePipeOptions();

}

export class BasePipeOptions {
  alwaysFetchDataFromApi: 'always' | 'once' = 'once';
  storeData: boolean = true;

  constructor(basePipeOptions?: IBasePipeOptions) {
    if(!!basePipeOptions) {
      Object.assign(this,basePipeOptions)
    }
  }
}

export interface IBasePipeOptions {
  alwaysFetchDataFromApi: boolean;
  storeData: boolean
}