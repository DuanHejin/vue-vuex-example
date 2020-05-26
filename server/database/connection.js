const MongoClient = require('mongodb').MongoClient;
const config = require('./config');

const url = `mongodb://${config.host}:${config.port}`;
const dbName = config.database;

let database = undefined;
let connection = undefined;

const db = () => {
  if (database) return database;

  MongoClient.connect(url, (err, client) => {
    console.log('connect successfully to server');
  
    database = client.db(dbName);
    connection = client;
  });
}

const close = () => {
  connection.close();
}

module.exports = {
  db,
  close
}

