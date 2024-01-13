import { NextRequest, NextResponse } from "next/server";

import { cookies } from "next/headers";
import { verifyJose } from "./db/helper";
import { Payload } from "./db/types";

export const middleware = async (request: NextRequest) => {
  // TODO: protect the wishlist
  if (request.url.includes("/api/wishlists")) {
    // no token? 401
    const token = cookies().get("token");
    if (!token) {
      return NextResponse.json({
        statusCode: 401,
        error: "Unauthorized",
      });
    }
    // token -> payload
    const payload = await verifyJose<Payload>(token.value);
    // payload -> header
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-user-id", payload.id);
    // next header
    return NextResponse.next({
      headers: requestHeaders,
    });
  }
  // next
  return NextResponse.next();
};
