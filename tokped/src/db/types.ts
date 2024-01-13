/**
 * TYPES DUMPS
 */
import { ObjectId } from "mongodb";
import { z } from "zod";

export type Payload = { id: string };

// REST style
export type Response<T> = {
  status: number;
  message?: string;
  data?: T;
  error?: string;
};

// USER
export type User = {
  _id: ObjectId;
  name?: string;
  username: string; // val: req, unique
  email: string; // val: req, unique, email
  password: string; // val: req, len min 5
};
export const ZodUserInput = z.object({
  name: z.string().optional(),
  username: z.string(), // val: req, unique
  email: z.string().email(), // val: req, unique, email
  password: z.string().min(5), // val: req, len min 5
});
export type UserInput = Omit<User, "_id">;
export type UserOutput = Omit<User, "password">;

// PRODUCT
export type Product = {
  _id: ObjectId;
  name: string; // val: req
  slug: string; // val: req, unique
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
};

// WISHLIST
export type Wishlist = {
  _id: ObjectId;
  userId: ObjectId; // val: req
  productId: ObjectId; // val: req
  createdAt: string;
  updatedAt: string;
};
export type WishlistOutput = {
  _id: ObjectId;
  userId: ObjectId; // val: req
  productId: ObjectId; // val: req
  createdAt: string;
  updatedAt: string;
  product: Product
};
export type WishlistInput = Omit<Omit<Wishlist, "_id">, "userId">;
