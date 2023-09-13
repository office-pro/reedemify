import { Sequelize } from "sequelize";

export class StaticModelHelper {
   
  static async bulkCreateOrUpdate(model: any, records: Array<any>,  createConditions: any = {
    keys: []
  }, updateConditions: any = {keys: []}) {
    let keys = JSON.parse(JSON.stringify(createConditions.keys));
    let updateKeys = JSON.parse(JSON.stringify(updateConditions.keys));
    delete createConditions.keys;
    delete updateConditions.keys;
    for(const record of records) {
      try{
          console.log("record data - ",StaticModelHelper.whereKeyValueExtractor(keys,record))
          const [recordObj, created] = await model.findOrCreate({
              where: StaticModelHelper.whereKeyValueExtractor(keys,record),
              defaults: record,
              ...createConditions
          });

          if (created) {
              console.log('data created:', recordObj.toJSON());
          } else {
              console.log('data already exists. Skipping...');


              await model.update(record,{
                  where: StaticModelHelper.whereKeyValueExtractor(updateKeys,record),
                  ...updateConditions
              }).then((updatedObj: any) => {
                  console.log('data updated:', updatedObj);
              })
              .catch((error: any) => {
                  console.error('Error updating data:', error);
              });

          }
      } catch (error) {
          console.error('Error inserting or updating data:', error);
      }
    }
  }

  static whereKeyValueExtractor(keys:Array<string> = [], record: any = {}) {
    let obj: any = {};

    keys.forEach((key:string) => {
      obj[key] = record[key];
    });

    return obj;
  }
}

