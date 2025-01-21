// @ts-check
const { test, expect } = require("@playwright/test");

test("login dan ke Halaman mata pelajaran", async ({ page }) => {
  await page.goto("https://selapan.smkn8malang.sch.id/login/index.php");

  await page.fill('input[name="username"]', "5240123663");
  await page.fill('input[name="password"]', "MS5DRZEZ");
  await page.click('button[type="submit"]');

  await page.getByLabel('Toggle sidebar').click();
  await page.waitForTimeout(2000);

  await page
    .getByRole("link", { name: "XI RPL B - PEMROGRAMAN WEB PWEB" })
    .click();

    await expect(page).toHaveURL("https://selapan.smkn8malang.sch.id/course/view.php?id=284");

});
