import { getProductBySlug } from "@/db/models/product";
import { Product, Response } from "@/db/types";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _request: NextRequest,
  { params }: { params: { slug: string } }
) => {
  const slug = params.slug;
  // GET
  const product = await getProductBySlug(slug);
  // res
  return NextResponse.json<Response<Product>>(
    {
      status: 200,
      message: `Success get Product!`,
      data: product,
    },
    {
      status: 200,
    }
  );
};
