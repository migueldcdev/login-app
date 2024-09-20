"use client";

import { useFormState, useFormStatus } from "react-dom";
import { loginUser } from "@/app/actions/auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export default function Login() {
  const [state, action] = useFormState(loginUser, undefined);
  const { pending } = useFormStatus();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action={action}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="e.g. email@example.com"
                  required
                  aria-describedby="email-error"
                />
                {state?.errors?.email && (
                  <Alert variant="destructive" id="email-error">
                    <ExclamationTriangleIcon className="h-4 w-4" />
                    <AlertDescription>{state.errors.email}</AlertDescription>
                  </Alert>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="********"
                  required
                  aria-describedby="password-error"
                />
                {state?.errors?.password && (
                  <Alert variant="destructive" id="password-error">
                    <ExclamationTriangleIcon className="h-4 w-4" />
                    <AlertDescription>{state.errors.password}</AlertDescription>
                  </Alert>
                )}
              </div>
              <Button type="submit" className="w-full" disabled={pending}>
                {pending ? "Logging in..." : "Login"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600">
            Do not have an account?{" "}
            <Link
              href="/auth/signup"
              className="font-medium text-blue-500 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
