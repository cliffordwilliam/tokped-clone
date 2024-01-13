/**
 * GET POST PUT PATCH DEL
 * USING MODEL FUNCS
 */
import { handleError } from "@/db/helper";
import { getUsers, postUsers } from "@/db/models/user";
import { Response, UserOutput, ZodUserInput } from "@/db/types";
import { NextResponse } from "next/server";

export const GET = async () => {
  // GET
  const users = await getUsers();
  // res
  return NextResponse.json<Response<UserOutput[]>>(
    {
      status: 200,
      message: "Success get Users!",
      data: users,
    },
    {
      status: 200,
    }
  );
};

export const POST = async (request: Request) => {
  try {
    // body
    const data = await request.json();

    // valid?
    const parsedData = ZodUserInput.safeParse(data);
    if (!parsedData.success) {
      throw parsedData.error;
    }

    // POST
    const user = await postUsers(parsedData.data);

    // res
    return NextResponse.json<Response<UserOutput>>(
      {
        status: 201,
        message: "Success POST user.",
        data: user,
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
