/**
 * - ERR HANDLER
 * - HASH
 * - COMPARE
 * - SIGN
 * - VERIFY
 */
import bcryptjs from "bcryptjs";
import { Response } from "./types";
import { z } from "zod";
import jwt from "jsonwebtoken";
import * as jose from "jose";

export function handleError(err: unknown): Response<never> {
  console.log(err);
  // 400 zod's
  if (err instanceof z.ZodError) {
    const zodErr = err as z.ZodError;
    const errPath = zodErr.issues[0].path[0];
    const errMessage = zodErr.issues[0].message;
    return {
      status: 400,
      error: `${errPath} - ${errMessage}`,
    };
  }
  // 500
  return {
    status: 500,
    message: "Internal server error",
  };
}

export function hash(text: string): string {
  return bcryptjs.hashSync(text);
}

export function compare(text: string, hash: string): boolean {
  return bcryptjs.compareSync(text, hash);
}

export function sign(payload: object) {
  return jwt.sign(payload, process.env.JWT_SECRET || "secret");
}

export function verify(token: string) {
  return jwt.verify(token, process.env.JWT_SECRET || "secret");
}

export const verifyJose = async <T>(token: string) => {
  const secretKey = new TextEncoder().encode(
    process.env.JWT_SECRET || "secret"
  );
  const payloadJose = await jose.jwtVerify<T>(token, secretKey);
  return payloadJose.payload;
};
