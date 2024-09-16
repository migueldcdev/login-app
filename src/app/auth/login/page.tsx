"use client";
import { useFormState } from "react-dom";
import { loginUser } from "@/app/actions";

const initialState = {
  message: "",
};

export default function Login() {
  const [state, formAction] = useFormState(loginUser, initialState);

  return (
    <div>
      <form action={formAction}>
        <p>{state.message}</p>
        <button>Login</button>
      </form>
    </div>
  );
}
