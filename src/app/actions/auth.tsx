"use server";

import { redirect } from "next/navigation";

type State = {
  message: string;
};

export async function signupUser(prevState: State, formData: FormData) {
  redirect("/dashboard");
}

export async function loginUser(prevState: State, formData: FormData) {
  redirect("/dashboard");
}

export async function logoutUser() {
  redirect("/auth/login");
}
