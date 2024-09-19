"use server";

import { redirect } from "next/navigation";

type State = {
  message: string;
};

export async function loginUser(prevState: State, formData: FormData) { 
 
  redirect("/dashboard");
}
