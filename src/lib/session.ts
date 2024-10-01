"use server";
import { SignJWT, jwtVerify } from "jose";

const session_key = new TextEncoder().encode(process.env.SESSION_SECRET);

export async function createSessionToken(userId: number) {
  try {
    const sessionToken = await new SignJWT({ id: userId })
      .setProtectedHeader({ alg: "HS256" })
      .sign(session_key);
    return sessionToken;
  } catch (err) {
    console.log("Error creating user session token: ", err);
    throw new Error("An error ocurred while creating user session token");    
  }
}

export async function decodeToken(token: string) {
  try {
    const data = await jwtVerify(token, session_key);
    return data;
  } catch(err) {
    console.log("Error decoding user session token: ", err);
    throw new Error("An error ocurred while decoding user session token");
  }
 
}
