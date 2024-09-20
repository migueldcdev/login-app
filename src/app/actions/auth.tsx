'use server';

import { redirect } from "next/navigation";
import { SignupFormSchema, FormState, LoginFormSchema } from "../lib/definitions";
import { createUser, getUser } from "../data/users";
import { User } from "../data/users";
import { createSessionToken } from "../lib/session";
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
  cookies().set('session', sessionToken);

  if (sessionToken) {
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

  const user = await getUser(userMail, userPassword);
  
  if (user) {
    const sessionToken = await createSessionToken(user.id);
    cookies().set('session', sessionToken);
    redirect("/home");
  }
  
}

export async function logoutUser() {
  cookies().delete('session');
  redirect("/Signup/login");
}
