"use server";

import { redirect } from "next/navigation";
import {
  SignupFormSchema,
  FormState,
  LoginFormSchema,
} from "../../lib/definitions";
import { createUser, getUser } from "../data";
import { User } from "../data";
import { createSessionToken } from "../../lib/session";
import { cookies } from "next/headers";

export async function signupUser(state: FormState, formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const user = await createUser(validatedFields.data as User);

  const sessionToken = await createSessionToken(user.id);

  if (sessionToken) {
    cookies().set("session", sessionToken, { maxAge: 180, path: "/" });
    redirect("/home");
  }
}

export async function loginUser(state: FormState, formData: FormData) {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const userMail = validatedFields.data.email;
  const userPassword = validatedFields.data.password;

  const userId = await getUser(userMail, userPassword);

  if (userId) {
    const sessionToken = await createSessionToken(userId);
    if (sessionToken) {
      cookies().set("session", sessionToken, { maxAge: 180, path: "/" });
      redirect("/home");
    }
  } else {
    return {
      message: "Incorrect user name or password",
    };
  }
}

export async function logoutUser() {
  cookies().delete("session");
  redirect("/auth/login");
}
