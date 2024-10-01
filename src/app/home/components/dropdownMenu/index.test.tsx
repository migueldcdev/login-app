import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Dropdown } from ".";
import { logoutUser } from "@/app/actions/auth";

describe("dropdow Menu tests", () => {
  test("it should open and logout", async () => {
    vi.mock("@/app/actions/auth");
    const user = userEvent;
    render(<Dropdown />);

    const userButton = screen.getByLabelText("Open");
    await user.click(userButton);

    const logoutButton = screen.getByLabelText("Logout");

    await user.click(logoutButton);

    expect(logoutUser).toBeCalled();
  });
});
