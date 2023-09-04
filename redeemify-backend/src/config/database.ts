import environment from "./environment";

const dbConfig = {
    "localhost": {
      "username": environment.dbUsername,
      "password": environment.dbPassword,
      "database": "myDb",
      "host": environment.dbHost,
      "dialect": "postgres",
      "driver": "tedious"
    },
  "development": {
    "username": environment.dbUsername,
    "password": environment.dbPassword,
    "database": "myDb",
    "host": environment.dbHost,
    "dialect": "postgres",
    "dialectOptions": {
      "encrypt": true,
      "ssl":true
    },
     "driver": "tedious"
    
  },
  "test": {
    "username": environment.dbUsername,
    "password": environment.dbPassword,
    "database": "database_test",
    "host": environment.dbHost,
    "dialect": "postgres",
    "dialectOptions": {
      "encrypt": true,
      "ssl":true
    },
  },
  "production": {
    "username": environment.dbUsername,
    "password": environment.dbPassword,
    "database": "database_production",
    "host": environment.dbHost,
    "dialect": "postgres",
    "dialectOptions": {
      "encrypt": true,
      "ssl":true
    },
  }
}

export default dbConfig;
