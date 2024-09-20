'use server'
import  Jwt  from "jsonwebtoken";

const session_key = process.env.SESSION_SECRET as string;

export async function createSessionToken(userId: string) {  
  const expirationDate = new Date(new Date().getTime() + 5 * 60000).getTime();  
  const sessionToken = Jwt.sign({id: userId, exp: expirationDate}, session_key);
  return sessionToken;
}

export async function decodeToken(token: string) {
  const data = Jwt.verify(token, session_key);
  return data;
}