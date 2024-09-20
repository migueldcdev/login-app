"use client";
import { useFormState, useFormStatus } from "react-dom";
import { loginUser } from "@/app/actions/auth";
import Link from "next/link";

const initialState = {
  message: "",
};

export default function Login() {
  const [state, formAction] = useFormState(loginUser, initialState);

  const { pending } = useFormStatus();

  return (
    <div>
      <form action={formAction}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" placeholder="e.g. email@example.com" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
          />
        </div>
        <button type="submit" disabled={pending}>
          Login
        </button>
      </form>
      <Link href="/auth/signup">Signup</Link>
    </div>
  );
}
