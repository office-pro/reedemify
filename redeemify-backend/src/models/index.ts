import fs from 'fs';
import * as path from 'path';

let models: any = {};

export function registersModels(sequelize: any) {
  const thisFile = path.basename(__filename);
  const modelFiles = fs.readdirSync(__dirname);
  console.log("filename - ", __filename);
  console.log("__dirname - ", __dirname);
  const filteredModelFiles = modelFiles.filter((file) => {
    return file != thisFile && file.slice(-9) === '.model.ts';
  })

  for(const file of filteredModelFiles) {
    const model = require(path.join(__dirname,file)).default(sequelize);
    if(model.name) {
      models[model.name] = model;
    }
  }

  Object.keys(models).forEach((modelName) => {
    if(models[modelName].associate) {
      models[modelName].associate(models)
    }
  });

  models.sequelize = sequelize;
}

export default models;