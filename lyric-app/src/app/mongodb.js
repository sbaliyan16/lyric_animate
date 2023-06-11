const { MongoClient } = require('mongodb');

let client = null;

async function connectToDatabase() {
  if (client) {
    return client;
  }

  const uri = "mongodb+srv://shubhankarbaliyan16:3D6iazB0kbPfvR2Z@cluster0.m1m6khz.mongodb.net/?retryWrites=true&w=majority";
  client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to the MongoDB cluster');
    return client;
  } catch (error) {
    console.error('Error connecting to the MongoDB cluster:', error);
    throw error;
  }
}

module.exports = { connectToDatabase };
