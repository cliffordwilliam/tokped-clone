/**
 * GET POST PUT PATCH DEL
 * USING MODEL FUNCS
 */
import { handleError } from "@/db/helper";
import { getProducts } from "@/db/models/product";
import { Response, Product } from "@/db/types";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const searchQuery = request.nextUrl.searchParams.get("search") as string;
  const parsedPage =
    parseInt(request.nextUrl.searchParams.get("page") as string, 10) || 1;

  // GET
  const products = await getProducts(searchQuery, parsedPage);
  // res
  return NextResponse.json<Response<Product[]>>(
    {
      status: 200,
      message: "Success get Products!",
      data: products,
    },
    {
      status: 200,
    }
  );
};
