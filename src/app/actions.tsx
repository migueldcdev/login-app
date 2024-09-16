"use server";

import { redirect } from "next/navigation";

type State = {
  message: string;
};

export async function loginUser(prevState: State, formData: FormData) {
  console.log(formData);
  if (formData) {
    return { message: "Please enter a valid email" };
  }

  redirect("/dashboard");
}
