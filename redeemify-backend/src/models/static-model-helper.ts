
export class StaticModelHelper {
   
  static async bulkCreateOrUpdate(model: any, records: Array<any>,  createConditions: any = {
    keys: []
  }, updateConditions: any = {keys: []}) {
    let keys = JSON.parse(JSON.stringify(createConditions.keys));
    let updateKeys = JSON.parse(JSON.stringify(updateConditions.keys));
    delete createConditions.keys;
    delete updateConditions.keys;
    let finalOp:Array<any> = [];
    console.log("records - ",records);
    let i = 0;
    for(let record of records) {
      i++;
      console.log("index - ", i);
      try{
          console.log("record data - ",StaticModelHelper.whereKeyValueExtractor(keys,record))
          const [recordObj, created] = await model.findOrCreate({
              where: StaticModelHelper.whereKeyValueExtractor(keys,record),
              defaults: record,
              ...createConditions
          });

          if (created) {
              finalOp.push(recordObj.toJSON());
              console.log('data created:', recordObj.toJSON());
          } else {
              console.log('data already exists. Skipping...');


              await model.update(record,{
                  where: StaticModelHelper.whereKeyValueExtractor(updateKeys,record),
                  ...updateConditions
              }).then((updatedObj: any) => {
                  console.log('data updated:', record);
              })
              .catch((error: any) => {
                  console.error('Error updating data:', error);
                  finalOp.push(record); 
              });

          }
      } catch (error) {
          console.error('Error inserting or updating data:', error);
      }
    }
    return Promise.resolve(finalOp);
  }

  static whereKeyValueExtractor(keys:Array<string> = [], record: any = {}) {
    let obj: any = {};

    keys.forEach((key:string) => {
      obj[key] = record[key];
    });

    return obj;
  }
}

