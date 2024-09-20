'use client';
import { useFormState, useFormStatus } from "react-dom";
import { signupUser } from "@/app/actions/auth";
import Link from "next/link";

export default function Signup() {
  const [state, action] = useFormState(signupUser, undefined);

  const { pending } = useFormStatus();

  return (
    <div>
      <form action={action}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" placeholder="e.g. John Doe" />
          {state?.errors?.name && <p>{state.errors.name}</p>}
        </div>
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
          Signup
        </button>
      </form>
      <Link href="/auth/login">Login</Link>
    </div>
  );
}
