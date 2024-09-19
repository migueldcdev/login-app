'use server';

import { redirect } from "next/navigation";
import { SignUpFormSchema, FormState } from "../lib/definitions";
import { addUser, getUser } from "../data/users";
import { User } from "../data/users";

export async function signupUser(state: FormState, formData: FormData) {
  const validatedFields = SignUpFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  addUser(validatedFields.data as User)

  redirect("/home");
}

export async function loginUser(state: FormState, formData: FormData) { 
  
  const validatedFields = SignUpFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const userMail = validatedFields.data.email;
  const userPassword = validatedFields.data.password;

  const user = await getUser(userMail, userPassword);

  if(user) redirect("/home");
}

// export async function logoutUser() {
//   redirect("/auth/login");
// }
