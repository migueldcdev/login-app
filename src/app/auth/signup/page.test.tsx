import { describe, expect, test, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Signup from "./page";
import { signupUser } from "@/app/actions/auth";

describe("Signup page tests", () => {
  test("user should signup", async () => {
    vi.mock("@/app/actions/auth");
    const user = userEvent;
    render(<Signup />);

    const nameInput = screen.getByPlaceholderText("e.g. John Doe");
    await user.type(nameInput, "User");

    const emailInput = screen.getByPlaceholderText("e.g. email@example.com");
    await user.type(emailInput, "user@mail.com");

    const passwordInput = screen.getByPlaceholderText("********");
    await user.type(passwordInput, "userpassword");

    const submitButton = screen.getByRole("button", { name: "Sign Up" });

    await user.click(submitButton);

    expect(signupUser).toBeCalled();
  });
});
