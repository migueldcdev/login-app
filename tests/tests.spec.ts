import { test, expect } from "@playwright/test";

test("user gets redirected if not logged", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page).toHaveTitle(/Login App/);

  await expect(page).toHaveURL(/.*\/login/);

  await page.goto("http://localhost:3000/home");

  await expect(page).toHaveURL(/.*\/login/);
});

test("user logs in and logs out", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await page.getByLabel("email").fill("user@mail.com");

  await page.getByLabel("password").fill("userpassword");

  await page.getByRole("button").getByText("Login").click();

  await expect(page).toHaveURL(/.*\/home/);

  await page.getByLabel("Open").click();

  await page.getByLabel("Logout").click();

  await expect(page).toHaveURL(/.*\/login/);
});

test("user signs up", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await page.getByRole("link").getByText("Sign up").click();

  await expect(page).toHaveURL(/.*\/signup/);

  await page.getByLabel("name").fill("U");

  await page.getByLabel("email").fill("user@mail.com");

  await page.getByLabel("password").fill("userpassword");

  await page.getByRole("button").getByText("Sign Up").click();

  const errorMessage = page.getByText(
    "Name must be at least 2 characters long.",
  );

  await expect(errorMessage).toBeInViewport();

  await page.getByLabel("name").fill("User");

  await page.getByRole("button").getByText("Sign Up").click();

  await expect(page).toHaveURL(/.*\/home/);
});
