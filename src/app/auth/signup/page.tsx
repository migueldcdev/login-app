"use client";

import { useFormState, useFormStatus } from "react-dom";
import { signupUser } from "@/app/actions/auth";
import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

export default function Signup() {
  const [state, action] = useFormState(signupUser, undefined);
  const { pending } = useFormStatus();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md border rounded-xl shadow bg-white">
        <div className="text-2xl font-bold text-center mt-6">Sign Up</div>
        <div className="p-6">
          <form action={action}>
            <div className="space-y-4">
              <div className="space-y-2 flex flex-col">
                <label className="text-sm" htmlFor="name">
                  Name
                </label>
                <input
                  className="rounded p-2 border"
                  id="name"
                  name="name"
                  placeholder="e.g. John Doe"
                  required
                  aria-describedby="name-error"
                />
                {state?.errors?.name && (
                  <div className="flex gap-1 text-red-500">
                    <FaExclamationTriangle className="h-4 w-4" />
                    <p className="text-sm">{state.errors.name}</p>
                  </div>
                )}
              </div>
              <div className="space-y-2 flex flex-col">
                <label className="text-sm" htmlFor="email">
                  Email
                </label>
                <input
                  className="rounded p-2 border"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="e.g. email@example.com"
                  required
                  aria-describedby="email-error"
                />
                {state?.errors?.email && (
                  <div className="flex gap-1 text-red-500">
                    <FaExclamationTriangle className="h-4 w-4" />
                    <p className="text-sm">{state.errors.email}</p>
                  </div>
                )}
              </div>
              <div className="space-y-2 flex flex-col">
                <label className="text-sm" htmlFor="password">
                  Password
                </label>
                <input
                  className="rounded p-2 border"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="********"
                  required
                  aria-describedby="password-error"
                />
                {state?.errors?.password && (
                  <div className="flex gap-1 text-red-500">
                    <FaExclamationTriangle className="h-4 w-4" />
                    <p className="text-sm">{state.errors.password}</p>
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-slate-900 text-white rounded-md p-2 mt-2 hover:bg-slate-800"
                disabled={pending}
              >
                {pending ? "Signing up..." : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center mb-6">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="font-medium text-blue-500 hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
