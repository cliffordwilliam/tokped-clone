/**
 * TALKS TO DB
 * USED BY ROUTE.TS
 * db.collection.find... insert
 */
import { Db, ObjectId } from "mongodb";
import { getDb } from "../config";
import { UserInput, User, UserOutput } from "../types";
import { userCollection } from "../c";
import { hash } from "../helper";

export async function getUsers() {
  const db = await getDb(process.env.MONGODB_DB_NAME || "");
  // Documnet[]
  const response = await db
    .collection(userCollection)
    .find()
    .project({ password: 0 })
    .toArray();
  // Documnet[] -> UserOutput[]
  const users: UserOutput[] = response.map((user) => ({
    _id: user._id as ObjectId,
    name: user.name as string,
    username: user.username as string,
    email: user.email as string,
  }));
  return users;
}

export async function postUsers(input: UserInput) {
  // user -> userHashed
  const userHashed: UserInput = {
    ...input,
    password: hash(input.password),
  };
  const db = await getDb(process.env.MONGODB_DB_NAME || "");
  // get (ok + id)
  const response = await db.collection(userCollection).insertOne(userHashed);

  // userHashed -> UserOutput
  const { password, ...addedUser } = {
    ...userHashed,
    _id: response.insertedId as ObjectId,
  };
  return addedUser as UserOutput;
}

export async function getUserByEmail(email: string) {
  const db = await getDb(process.env.MONGODB_DB_NAME || "");
  const user = (await db
    .collection(userCollection)
    .findOne({ email: email })) as User;
  return user;
}
