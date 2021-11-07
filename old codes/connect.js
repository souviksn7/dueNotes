const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = "dueNotes";

// getData.catch((err) => console.log(err));
async function dbConnect()
{
  let result = await client.connect();
  let db = result.db(database);
  return db.collection('peopletomename');
}

module.exports = dbConnect;