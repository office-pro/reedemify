import Database from '../database/index';
import dbConfig from '../config/database';


export default class TestHelpers {

  static db: Database;

  static async startDb() {
    TestHelpers.db = new Database("development",dbConfig);
    await TestHelpers.db.connect();
    return TestHelpers.db;
  }

  static async stopDb() {
    await TestHelpers.db.disconnect();
  }

  static async syncDb() {
    await TestHelpers.db.sync(); 
  }
}