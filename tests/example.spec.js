// @ts-check
const { test, expect } = require("@playwright/test");

test("Halaman mata pelajaran", async ({ page }) => {
  await page.goto("https://selapan.smkn8malang.sch.id/login/index.php");

  // Expect a title "to contain" a substring.
  await page.fill('input[name="username"]', "5240123663");
  await page.fill('input[name="password"]', "MS5DRZEZ");
  await page.click('button[type="submit"]');

  await page.click("button.tgsdb_btn");

  // Click the get started link.
  await page
    .getByRole("link", { name: "XI RPL B - PEMROGRAMAN WEB PWEB" })
    .click();

  // await expect(page).toHaveTitle(/Playwright/);
});
