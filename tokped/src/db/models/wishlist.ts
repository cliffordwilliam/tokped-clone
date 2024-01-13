/**
 * TALKS TO DB
 * USED BY ROUTE.TS
 * db.collection.find... insert
 */
import { Db, ObjectId } from "mongodb";
import { getDb } from "../config";
import { Product, Wishlist, WishlistInput, WishlistOutput } from "../types";
import { wishlistCollection } from "../c";

export async function getWishlist(authorId: ObjectId) {
  const db = await getDb(process.env.MONGODB_DB_NAME || "");
  const wishlist = (await db
    .collection(wishlistCollection)
    .aggregate([
      {
        $match: {
          userId: authorId,
        },
      },
      {
        $lookup: {
          from: "Products",
          localField: "productId",
          foreignField: "_id",
          as: "product",
        },
      },
      {
        $unwind: "$product",
      },
    ])
    .toArray()) as WishlistOutput[];
  return wishlist;
}

export async function postWishlist(input: WishlistInput) {
  const db = await getDb(process.env.MONGODB_DB_NAME || "");
  const response = await db.collection(wishlistCollection).insertOne(input);
  const addedWishlist = (await db
    .collection(wishlistCollection)
    .findOne({ _id: response.insertedId })) as Wishlist;
  return addedWishlist;
}

export async function delWishlist(input: ObjectId) {
  const db = await getDb(process.env.MONGODB_DB_NAME || "");
  console.log(new ObjectId(input));

  const deleteResult = await db
    .collection(wishlistCollection)
    .deleteOne({ productId: new ObjectId(input) });
}
