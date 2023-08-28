const dbConfig = {
  "development": {
    "username": "dv_promo",
    "password": "dvpromo@123",
    "database": "myDb",
    "host": "postgres-dv.postgres.database.azure.com",
    "dialect": "postgres",
    "dialectOptions": {
      "encrypt": true,
      "ssl":true
    },
     "driver": "tedious"
    
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

export default dbConfig;
