const { test, expect } = require("@playwright/test");

test("test fitur search", async ({ page }) => {
  await page.goto("https://selapan.smkn8malang.sch.id/login/index.php");

  await page.fill('input[name="username"]', "username");
  await page.fill('input[name="password"]', "password");
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL("https://selapan.smkn8malang.sch.id/my/");
  
  
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Search', exact: true }).fill("gerakan literasi sekolah");
  await page.getByLabel('×Close').getByLabel('Search').click();

  // const gerakan=page.locator('a');
  await expect(page).toHaveURL("https://selapan.smkn8malang.sch.id/course/search.php?search=gerakan+literasi+sekolah");

  await page.getByRole('link', { name: 'Enter this course' }).nth(1).click();
  await expect(page).toHaveURL("https://selapan.smkn8malang.sch.id/course/view.php?id=561");


//   await page
//     .getByRole("link", { name: "XI RPL B - PEMROGRAMAN WEB PWEB" })
//     .click();


});