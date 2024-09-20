"use server";

import { redirect } from "next/navigation";
import { AuthFormSchema, FormState } from "../lib/definitions";
import { createUser, getUser } from "../data/users";
import { User } from "../data/users";
import { deleteSession } from "../lib/session";

export async function signupUser(state: FormState, formData: FormData) {
  const validatedFields = AuthFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  createUser(validatedFields.data as User);

  //create user session

  redirect("/home");
}

export async function loginUser(state: FormState, formData: FormData) {
  const validatedFields = AuthFormSchema.safeParse({
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

  const user = await getUser(userMail, userPassword);

  //create user session

  if (user) redirect("/home");
}

export async function logoutUser() {
  deleteSession();
  redirect("/auth/login");
}
