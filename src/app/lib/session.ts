"use server";
import { SignJWT, jwtVerify } from "jose";

const session_key = new TextEncoder().encode(process.env.SESSION_SECRET);

export async function createSessionToken(userId: string) {
  const sessionToken = await new SignJWT({ id: userId })
    .setProtectedHeader({ alg: "HS256" })
    .sign(session_key);
  return sessionToken;
}

export async function decodeToken(token: string) {
  const data = await jwtVerify(token, session_key);
  return data;
}
