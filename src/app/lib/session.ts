"use server";
import Jwt from "jsonwebtoken";

const session_key = process.env.SESSION_SECRET as string;

export async function createSessionToken(userId: string) {
  const sessionToken = Jwt.sign({ id: userId }, session_key);
  return sessionToken;
}

export async function decodeToken(token: string) {
  const data = Jwt.verify(token, session_key);
  return data;
}
