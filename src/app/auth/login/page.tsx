'use client';
import { useFormState, useFormStatus } from "react-dom";
import { loginUser } from "@/app/actions/auth";
import Link from "next/link";

export default function Login() {
  const [state, action] = useFormState(loginUser, undefined);

  const { pending } = useFormStatus();

  return (
    <div>
      <form action={action}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" placeholder="e.g. email@example.com" />
          {state?.errors?.email && <p>{state.errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
          />
          {state?.errors?.password && <p>{state.errors.password}</p>}
        </div>
        <button type="submit" disabled={pending}>
          Login
        </button>
      </form>
      <Link href="/auth/signup">Signup</Link>
    </div>
  );
}
