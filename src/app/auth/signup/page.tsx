"use client";
import { signupUser } from "@/app/actions/auth";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  message: "",
};

export default function Signup() {
  const [state, formAction] = useFormState(signupUser, initialState);

  const { pending } = useFormStatus();

  return (
    <div>
      <form action={formAction}>
        <div>
          <label htmlFor="email">Email</label>
          <input />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input />
        </div>
        <button disabled={pending}>Signin</button>
      </form>
    </div>
  );
}
