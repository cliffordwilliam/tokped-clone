// RETURNS DB
import { MongoClient } from "mongodb";

const connectionString = process.env.MONGODB_CONNECTION_STRING;

let client: MongoClient;

export const getDb = async (dbName: string) => {
  // stop undefined type
  if (connectionString === undefined) {
    throw new Error(
      "MONGODB_CONNECTION_STRING is undefined. Provide a valid connection string."
    );
  }
  // connect 1 time
  if (!client) {
    client = await MongoClient.connect(connectionString);
    await client.connect();
  }
  // return db
  return client.db(dbName);
};
