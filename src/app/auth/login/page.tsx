"use client";
import { useFormState, useFormStatus } from "react-dom";
import { loginUser } from "@/app/actions/auth";

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
          <input id="email" name="email" placeholder="e.g. yourname@mail.com" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button disabled={pending}>Login</button>
      </form>
    </div>
  );
}
