import cls from 'cls-hooked';
import {Sequelize} from 'sequelize';
import { registersModels } from '../models';

export default class Database {
  environment: any;
  dbConfig: any;
  isTestEnvironment: boolean ;
  connection: any;

  constructor(environment: any, dbConfig: any) {
    this.environment = environment;
    this.dbConfig = dbConfig;
    this.isTestEnvironment = this.environment === 'test';
  }

  async connect() {
    // setup namespace for transactions
    const namespace = cls.createNamespace("transactions-namespace");
    Sequelize.useCLS(namespace);
    // create connection
    const {username, password, host, port, database,dialect, dialectOptions} = this.dbConfig[this.environment];
    
    this.connection = new Sequelize({
      username,
      password,
      host,
      port,
      database,
      dialect,
      dialectOptions,
      logging: this.isTestEnvironment ? false : console.log
    });

    // await this.connection.authenticate({logging: false});

    if(!this.isTestEnvironment) {
      console.log('Connection established')
    }

    console.log("registers")

    // Register moddel
    registersModels(this.connection)

    // Sync model

    this.sync()
  }

  async disconnect() {

  }

  async sync() {
    await this.connection.sync({
      logging: false,
      force: this.isTestEnvironment
    });

    if(!this.isTestEnvironment) {
      console.log('connection sync successfully');
    }
  }
}