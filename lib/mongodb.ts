import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB ?? 'enterpriserm';

if (!uri) {
  throw new Error('Missing MONGODB_URI environment variable.');
}

let clientPromise: Promise<MongoClient>;

if (!(globalThis as unknown as { _mongoClientPromise?: Promise<MongoClient> })._mongoClientPromise) {
  const client = new MongoClient(uri);
  (globalThis as unknown as { _mongoClientPromise?: Promise<MongoClient> })._mongoClientPromise = client.connect();
}

clientPromise = (globalThis as unknown as { _mongoClientPromise: Promise<MongoClient> })._mongoClientPromise;

export async function getMongoDb(): Promise<Db> {
  const client = await clientPromise;
  return client.db(dbName);
}
