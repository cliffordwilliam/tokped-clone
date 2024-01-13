/**
 * TALKS TO DB
 * USED BY ROUTE.TS
 * db.collection.find... insert
 */
import { Db, ObjectId } from "mongodb";
import { getDb } from "../config";
import { Product } from "../types";
import { productCollection } from "../c";

export async function getProducts(searchQuery?: string, page: number = 1) {
  const db = await getDb(process.env.MONGODB_DB_NAME || "");
  const filter: any = {};
  if (searchQuery) {
    const regex = new RegExp(searchQuery, "i");
    filter.$or = [{ name: regex }];
  }
  const products = (await db
    .collection(productCollection)
    .find(filter)
    .limit(10 * page)
    .toArray()) as Product[];
  return products;
}

export async function getProductBySlug(slug: string) {
  // const _id = new ObjectId(id);
  const db = await getDb(process.env.MONGODB_DB_NAME || "");
  const product = (await db
    .collection(productCollection)
    .findOne({ slug: slug })) as Product;
  return product;
}
