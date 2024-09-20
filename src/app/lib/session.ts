import "server only";
import { cookies } from "next/headers";

async function encrypt() {}

async function decrypt() {}

export async function createSession(userId) {}

export function deleteSession() {
  cookies().delete("session");
}
