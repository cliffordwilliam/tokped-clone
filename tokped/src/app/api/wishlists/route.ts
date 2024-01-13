/**
 * GET POST PUT PATCH DEL
 * USING MODEL FUNCS
 */
import { handleError } from "@/db/helper";
import { getWishlist, postWishlist, delWishlist } from "@/db/models/wishlist";
import { Response, Wishlist, WishlistInput } from "@/db/types";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const loggedInUserId = request.headers.get("x-user-id") as string;
  // GET
  const wishlist = await getWishlist(new ObjectId(loggedInUserId));

  // res
  return NextResponse.json<Response<Wishlist[]>>(
    {
      status: 200,
      message: "Success get Wishlists!",
      data: wishlist,
    },
    {
      status: 200,
    }
  );
};

export const POST = async (request: Request) => {
  try {
    const loggedInUserId = request.headers.get("x-user-id") as string;

    // body
    const data = await request.json();
    const productId = data.productId;
    console.log(productId, loggedInUserId, "ROUTE");
    const input = {
      userId: new ObjectId(loggedInUserId),
      productId: new ObjectId(productId),
      createdAt: new Date().toString(),
      updatedAt: new Date().toString(),
    } as WishlistInput;

    // valid?
    // TODO: cek if valid, got both id in input fk

    // POST
    const wishlist = await postWishlist(input);

    // res
    return NextResponse.json<Response<Wishlist>>(
      {
        status: 201,
        message: "Success POST wishlist.",
        data: wishlist,
      },
      {
        status: 201,
      }
    );
  } catch (err) {
    const errorResponse = handleError(err);
    return NextResponse.json(errorResponse, {
      status: errorResponse.status,
    });
  }
};

export const DELETE = async (request: Request) => {
  try {
    // body
    const data = await request.json();
    const productId = data.productId as ObjectId;
    console.log(productId, "ROUTE");

    // valid?
    // TODO: cek if valid, got both id in input fk

    // DEL
    await delWishlist(productId);

    // res
    return NextResponse.json<Response<Wishlist>>(
      {
        status: 201,
        message: "Success DEL wishlist.",
      },
      {
        status: 201,
      }
    );
  } catch (err) {
    const errorResponse = handleError(err);
    return NextResponse.json(errorResponse, {
      status: errorResponse.status,
    });
  }
};
